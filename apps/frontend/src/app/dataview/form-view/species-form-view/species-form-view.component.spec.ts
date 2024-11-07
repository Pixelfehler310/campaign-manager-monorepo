import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesFormViewComponent } from './species-form-view.component';

describe('SpeciesFormViewComponent', () => {
  let component: SpeciesFormViewComponent;
  let fixture: ComponentFixture<SpeciesFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeciesFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
