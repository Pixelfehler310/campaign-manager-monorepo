import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDetailViewComponent } from './monster-detail-view.component';

describe('MonsterDetailViewComponent', () => {
  let component: MonsterDetailViewComponent;
  let fixture: ComponentFixture<MonsterDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterDetailViewComponent],
    });
    fixture = TestBed.createComponent(MonsterDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
