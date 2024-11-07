/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiceInfoComponent } from './dice-info.component';

describe('DiceInfoComponent', () => {
  let component: DiceInfoComponent;
  let fixture: ComponentFixture<DiceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
