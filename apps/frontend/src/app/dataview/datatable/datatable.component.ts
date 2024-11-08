import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ActionType } from '@campaign-manager/shared';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [MessageService, ConfirmationService], // Lokale Instanzen der Services
})
export class DatatableComponent {
  @Input() items: any[] = [];
  @Input() itemForm?: FormGroup; // Optional
  @Input() currentItem?: any = null; // Optional
  @Input() selectedItems?: any[] = []; // Optional
  @Input() columns: {
    field: string;
    header: string;
    size: number;
    type: string;
    suggestions?: any[];
    completeMethod?: string;
  }[] = []; // Columns configuration with size and type
  @Input() primaryKeys: string[] = []; // Primary keys for uniqueness check
  @Input() disabled: boolean = false;

  @Output() itemsChange = new EventEmitter<any[]>();
  @Output() currentItemChange = new EventEmitter<any>();
  @Output() selectedItemsChange = new EventEmitter<any[]>();

  @ViewChild('datatableToast') datatableToast!: Toast;
  @ViewChild('datatableConfirm') datatableConfirm!: ConfirmDialog;

  itemDialog: boolean = false;
  submitted: boolean = false;
  editIndex: number | null = null;
  errorMessages: any[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    if (this.disabled) return;
    this.itemForm?.reset();
    this.submitted = false;
    this.itemDialog = true;
  }

  hideDialog() {
    if (this.disabled) return;
    this.itemDialog = false;
    this.submitted = false;
  }

  saveItem() {
    if (this.disabled) return;
    this.submitted = true;

    if (this.itemForm?.valid) {
      // Check if the item already exists based on primary keys
      const existingItemIndex = this.items.findIndex((item: any) =>
        this.primaryKeys.every(
          (key) => item[key] === this.itemForm?.get(key)?.value
        )
      );

      if (
        existingItemIndex !== -1 &&
        this.items[existingItemIndex] !== this.currentItem
      ) {
        // Item already exists and it's not the current item being edited
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Item must be unique based on primary keys.',
        });
        return;
      }

      if (this.currentItem) {
        const index = this.items.findIndex(
          (item: any) => item === this.currentItem
        );
        if (index !== -1) {
          this.items[index] = this.itemForm.value;
        }
      } else {
        this.items.push(this.itemForm.value);
      }

      this.itemDialog = false;
      this.itemForm.reset();
      this.currentItem = null;
      this.itemsChange.emit(this.items);
      this.currentItemChange.emit(this.currentItem);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Form is invalid.',
      });
    }
  }

  editItem(item: any) {
    if (this.disabled) return;
    this.itemForm?.patchValue(item);
    this.itemDialog = true;
    this.currentItem = item;
    this.currentItemChange.emit(this.currentItem);
  }

  deleteItem(item: any) {
    if (this.disabled) return;
    const index = this.items.findIndex((i: any) => i === item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

    /* Aus SelectedItems auch raus */
    const indexSelected = this.selectedItems?.findIndex((i: any) => i === item);
    if (indexSelected !== undefined && indexSelected !== -1) {
      this.selectedItems?.splice(indexSelected, 1);
    }
    this.itemsChange.emit(this.items);
    this.selectedItemsChange.emit(this.selectedItems);
  }

  deleteSelectedItems() {
    if (this.disabled) return;
    this.confirmationService.confirm({
      message: 'Möchtest du die ausgewählte(n) Item(s) wirklich löschen?',
      header: 'Bestätigung',
      icon: 'fa-solid fa-triangle-exclamation',
      accept: () => {
        this.selectedItems?.forEach((item) => {
          const index = this.items.findIndex((i: any) => i === item);
          if (index !== -1) {
            this.items.splice(index, 1);
          }
        });
        this.selectedItems = [];
        this.itemsChange.emit(this.items);
        this.selectedItemsChange.emit(this.selectedItems);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Items Deleted',
          life: 3000,
        });
      },
    });
  }

  handleCompleteMethod(event: any, methodName?: string) {
    if (this.disabled) return;
    switch (methodName) {
      case 'searchActionTypes':
        this.searchActionTypes(event);
        break;
      // Weitere Methoden können hier hinzugefügt werden
      default:
        console.warn(`Unbekannte Methode: ${methodName}`);
    }
  }

  searchActionTypes(event: any) {
    if (this.disabled) return;
    // Beispielhafte Implementierung der Suchlogik
    const query = event.query.toLowerCase();
    this.columns.find((col) => col.field === 'type')!.suggestions =
      Object.values(ActionType).filter((type) =>
        type.toLowerCase().includes(query)
      );
  }
}
