import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFormViewComponent } from './monster-form-view.component';

describe('MonsterFormViewComponent', () => {
  let component: MonsterFormViewComponent;
  let fixture: ComponentFixture<MonsterFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonsterFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
