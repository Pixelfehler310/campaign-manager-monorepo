import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWebserviceTestComponent } from './http-webservice-test.component';

describe('HttpWebserviceTestComponent', () => {
  let component: HttpWebserviceTestComponent;
  let fixture: ComponentFixture<HttpWebserviceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpWebserviceTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpWebserviceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
