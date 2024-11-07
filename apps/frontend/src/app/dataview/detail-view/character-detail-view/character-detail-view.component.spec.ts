import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailViewComponent } from './character-detail-view.component';

describe('CharacterDetailViewComponent', () => {
  let component: CharacterDetailViewComponent;
  let fixture: ComponentFixture<CharacterDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDetailViewComponent],
    });
    fixture = TestBed.createComponent(CharacterDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
