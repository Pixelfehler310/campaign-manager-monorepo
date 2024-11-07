import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFormViewComponent } from './character-form-view.component';

describe('CharacterFormComponent', () => {
  let component: CharacterFormViewComponent;
  let fixture: ComponentFixture<CharacterFormViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterFormViewComponent],
    });
    fixture = TestBed.createComponent(CharacterFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
