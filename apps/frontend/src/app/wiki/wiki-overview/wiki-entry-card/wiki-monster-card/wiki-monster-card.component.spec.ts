import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiMonsterCardComponent } from './wiki-monster-card.component';

describe('WikiMonsterCardComponent', () => {
  let component: WikiMonsterCardComponent;
  let fixture: ComponentFixture<WikiMonsterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiMonsterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiMonsterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
