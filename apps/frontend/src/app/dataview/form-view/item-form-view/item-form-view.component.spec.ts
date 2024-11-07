import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormViewComponent } from './item-form-view.component';

describe('ItemFormViewComponent', () => {
  let component: ItemFormViewComponent;
  let fixture: ComponentFixture<ItemFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
