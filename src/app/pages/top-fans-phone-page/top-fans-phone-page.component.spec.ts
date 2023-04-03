import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFansPhonePageComponent } from './top-fans-phone-page.component';

describe('TopFansPhonePageComponent', () => {
  let component: TopFansPhonePageComponent;
  let fixture: ComponentFixture<TopFansPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFansPhonePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFansPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
