import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDetailViewComponent } from './region-detail-view.component';

describe('RegionDetailViewComponent', () => {
  let component: RegionDetailViewComponent;
  let fixture: ComponentFixture<RegionDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionDetailViewComponent],
    });
    fixture = TestBed.createComponent(RegionDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
