import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiRegionCardComponent } from './wiki-region-card.component';

describe('WikiRegionCardComponent', () => {
  let component: WikiRegionCardComponent;
  let fixture: ComponentFixture<WikiRegionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiRegionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiRegionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
