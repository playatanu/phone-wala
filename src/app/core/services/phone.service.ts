import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://phone-specs-api.azharimm.dev';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  searchPhone(name: string): any {
    var url = `${baseUrl}/search?query=${name}`;
    return this.http.get(url);
  }

  getPhoneDetails(slug: string): any {
    var url = `${baseUrl}/${slug}`;
    return this.http.get(url);
  }

  getLatestPhones(): any {
    var url = `${baseUrl}/latest`;
    return this.http.get(url);
  }

  getTopByFanPhones(): any {
    var url = `${baseUrl}/top-by-fans`;
    return this.http.get(url);
  }

  getTopByInterestPhones(): any {
    var url = `${baseUrl}/top-by-interest`;
    return this.http.get(url);
  }

  getBrands(): any {
    var url = `${baseUrl}/brands`;
    return this.http.get(url);
  }

  getBrandsPhones(slug: string): any {
    var url = `${baseUrl}/brands/${slug}`;
    return this.http.get(url);
  }
}
