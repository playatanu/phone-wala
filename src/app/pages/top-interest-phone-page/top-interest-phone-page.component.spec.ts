import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInterestPhonePageComponent } from './top-interest-phone-page.component';

describe('TopInterestPhonePageComponent', () => {
  let component: TopInterestPhonePageComponent;
  let fixture: ComponentFixture<TopInterestPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInterestPhonePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopInterestPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
