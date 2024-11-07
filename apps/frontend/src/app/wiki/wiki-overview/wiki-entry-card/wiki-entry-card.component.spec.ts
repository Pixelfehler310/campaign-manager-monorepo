import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiEntryCardComponent } from './wiki-entry-card.component';

describe('WikiEntryCardComponent', () => {
  let component: WikiEntryCardComponent;
  let fixture: ComponentFixture<WikiEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiEntryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
