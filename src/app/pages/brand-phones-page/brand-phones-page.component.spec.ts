import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPhonesPageComponent } from './brand-phones-page.component';

describe('BrandPhonesPageComponent', () => {
  let component: BrandPhonesPageComponent;
  let fixture: ComponentFixture<BrandPhonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPhonesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPhonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
