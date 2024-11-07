import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDetailViewComponent } from './spell-detail-view.component';

describe('SpellDetailViewComponent', () => {
  let component: SpellDetailViewComponent;
  let fixture: ComponentFixture<SpellDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellDetailViewComponent],
    });
    fixture = TestBed.createComponent(SpellDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
