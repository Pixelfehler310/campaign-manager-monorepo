import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFormViewComponent } from './region-form-view.component';

describe('RegionFormViewComponent', () => {
  let component: RegionFormViewComponent;
  let fixture: ComponentFixture<RegionFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
