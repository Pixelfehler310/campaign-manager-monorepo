import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiFilterBarComponent } from './wiki-filter-bar.component';

describe('WikiFilterBarComponent', () => {
  let component: WikiFilterBarComponent;
  let fixture: ComponentFixture<WikiFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiFilterBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WikiFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
