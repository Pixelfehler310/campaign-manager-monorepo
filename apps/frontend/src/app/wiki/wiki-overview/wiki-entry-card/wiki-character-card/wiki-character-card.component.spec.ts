import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiCharacterCardComponent } from './wiki-character-card.component';

describe('WikiCharacterCardComponent', () => {
  let component: WikiCharacterCardComponent;
  let fixture: ComponentFixture<WikiCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiCharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
