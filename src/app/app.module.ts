import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LatestPhonePageComponent } from './pages/latest-phone-page/latest-phone-page.component';
import { TopFansPhonePageComponent } from './pages/top-fans-phone-page/top-fans-phone-page.component';
import { TopInterestPhonePageComponent } from './pages/top-interest-phone-page/top-interest-phone-page.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { BrandPhonesPageComponent } from './pages/brand-phones-page/brand-phones-page.component';

@NgModule({
  declarations: [AppComponent, NavComponent, SearchPageComponent, HomePageComponent, DetailPageComponent, LatestPhonePageComponent, TopFansPhonePageComponent, TopInterestPhonePageComponent, BrandsComponent, BrandPhonesPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
