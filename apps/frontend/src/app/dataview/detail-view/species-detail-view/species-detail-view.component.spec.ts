import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDetailViewComponent } from './species-detail-view.component';

describe('SpeciesDetailViewComponent', () => {
  let component: SpeciesDetailViewComponent;
  let fixture: ComponentFixture<SpeciesDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesDetailViewComponent],
    });
    fixture = TestBed.createComponent(SpeciesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
