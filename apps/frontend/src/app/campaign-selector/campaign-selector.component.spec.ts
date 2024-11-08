import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSelectorComponent } from './campaign-selector.component';

describe('CampaignSelectorComponent', () => {
  let component: CampaignSelectorComponent;
  let fixture: ComponentFixture<CampaignSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignSelectorComponent],
    });
    fixture = TestBed.createComponent(CampaignSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
