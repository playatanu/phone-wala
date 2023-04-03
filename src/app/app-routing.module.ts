import { BrandPhonesPageComponent } from './pages/brand-phones-page/brand-phones-page.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { TopInterestPhonePageComponent } from './pages/top-interest-phone-page/top-interest-phone-page.component';
import { TopFansPhonePageComponent } from './pages/top-fans-phone-page/top-fans-phone-page.component';
import { LatestPhonePageComponent } from './pages/latest-phone-page/latest-phone-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'phone/:slug', component: DetailPageComponent, title: 'Phone' },
  { path: 'search', component: SearchPageComponent, title: 'Search' },
  {
    path: 'latest',
    component: LatestPhonePageComponent,
    title: 'Latest Devices',
  },
  {
    path: 'top-by-fans',
    component: TopFansPhonePageComponent,
    title: 'Top By Fans',
  },
  {
    path: 'top-by-interest',
    component: TopInterestPhonePageComponent,
    title: 'Top By Interest',
  },
  { path: 'brands', component: BrandsComponent, title: 'Brands' },
  { path: 'brands/:slug', component: BrandPhonesPageComponent, title: 'Brands' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
