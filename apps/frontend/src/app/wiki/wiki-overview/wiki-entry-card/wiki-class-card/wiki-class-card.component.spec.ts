import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiClassCardComponent } from './wiki-class-card.component';

describe('WikiClassCardComponent', () => {
  let component: WikiClassCardComponent;
  let fixture: ComponentFixture<WikiClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiClassCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
