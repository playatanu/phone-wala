import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPhonePageComponent } from './latest-phone-page.component';

describe('LatestPhonePageComponent', () => {
  let component: LatestPhonePageComponent;
  let fixture: ComponentFixture<LatestPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPhonePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
