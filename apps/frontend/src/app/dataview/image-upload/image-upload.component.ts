import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploadComponent),
      multi: true,
    },
  ],
})
export class ImageUploadComponent implements ControlValueAccessor {
  @Input() imageUrl: string | null = 'assets/characters/img/pinguin.jpg'; // Kann als Input fungieren
  @Input() disabled?: boolean;

  value: string | null = null; // URL
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  // ControlValueAccessor Implementierung
  writeValue(value: string): void {
    this.value = value;
    this.imageUrl = value; // Setze die URL für das Bild
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Methode zum Löschen des Bildes
  deleteImage() {
    this.imageUrl = null;
    this.value = null;
    this.onChange(this.value); // Benachrichtige das Formular über die Änderung
  }

  // Methode um ein File-Objekt aus der URL zu laden
  async loadFileFromUrl(): Promise<File | null> {
    if (!this.value) {
      return null;
    }

    try {
      const response = await fetch(this.value);
      const blob = await response.blob();
      const fileName = this.value.split('/').pop() || 'image';
      const file = new File([blob], fileName, { type: blob.type });
      console.warn(file);

      return file;
    } catch (error) {
      console.error('Fehler beim Laden des Bildes:', error);
      return null;
    }
  }

  // Implementierung der onImageUpload-Methode
  onImageUpload(event: FileUploadHandlerEvent) {
    const file = event.files[0]; // Holen des ersten hochgeladenen Files
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string; // Setze die Bild-URL
        this.value = this.imageUrl; // Aktualisiere das value
        this.onChange(this.value); // Benachrichtige das Formular über die Änderung
      };
      reader.readAsDataURL(file); // Lese die Datei als Data URL
    }
  }
}
