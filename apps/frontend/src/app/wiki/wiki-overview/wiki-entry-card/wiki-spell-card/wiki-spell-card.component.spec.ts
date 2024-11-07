import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSpellCardComponent } from './wiki-spell-card.component';

describe('WikiSpellCardComponent', () => {
  let component: WikiSpellCardComponent;
  let fixture: ComponentFixture<WikiSpellCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiSpellCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiSpellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
