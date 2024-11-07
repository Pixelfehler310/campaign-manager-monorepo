import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchBarComponent } from './wiki-search-bar.component';

describe('WikiSearchBarComponent', () => {
  let component: WikiSearchBarComponent;
  let fixture: ComponentFixture<WikiSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiSearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
