import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFormViewComponent } from './class-form-view.component';

describe('ClassFormViewComponent', () => {
  let component: ClassFormViewComponent;
  let fixture: ComponentFixture<ClassFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassFormViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
