import { IDetail } from './../../core/interfaces/response.interface';

import { PhoneService } from './../../core/services/phone.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent {
  public phone: IDetail = {
    brand: '',
    phone_name: '',
    thumbnail: '',
    phone_images: [],
    release_date: '',
    dimension: '',
    os: '',
    storage: '',
    specifications: [],
  };

  public isLoading: boolean = true;

  constructor(
    private activatedroute: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var slug = this.activatedroute.snapshot.paramMap.get(
      'slug'
    ) as unknown as string;

    this.getPhoneDetails(slug);
  }

  getPhoneDetails(slug: string) {
    this.phoneService.getPhoneDetails(slug).subscribe({
      next: (res: any) => {
        this.phone = res.data;
        this.isLoading = false;
      },
      error: (error: any) => console.log(error),
    });
  }
}
