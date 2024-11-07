import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSpeciesCardComponent } from './wiki-species-card.component';

describe('WikiSpeciesCardComponent', () => {
  let component: WikiSpeciesCardComponent;
  let fixture: ComponentFixture<WikiSpeciesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiSpeciesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiSpeciesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
