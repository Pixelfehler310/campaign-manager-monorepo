import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiItemCardComponent } from './wiki-item-card.component';

describe('WikiItemCardComponent', () => {
  let component: WikiItemCardComponent;
  let fixture: ComponentFixture<WikiItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiItemCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
