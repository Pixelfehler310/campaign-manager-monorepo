import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellFormViewComponent } from './spell-form-view.component';

describe('SpellFormViewComponent', () => {
  let component: SpellFormViewComponent;
  let fixture: ComponentFixture<SpellFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
