import { PhoneService } from 'src/app/core/services/phone.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-phones-page',
  templateUrl: './brand-phones-page.component.html',
  styleUrls: ['./brand-phones-page.component.css'],
})
export class BrandPhonesPageComponent {
  public phones: any;
  public isLoading: boolean = false;
  public title: string = '';

  constructor(
    private activatedroute: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var slug = this.activatedroute.snapshot.paramMap.get(
      'slug'
    ) as unknown as string;

    this.getBrandPhones(slug);
  }

  getBrandPhones(slug: string) {
    this.isLoading = true;
    this.phoneService.getBrandsPhones(slug).subscribe({
      next: (res: any) => {
        this.title = res.data.title;
        this.phones = res.data.phones;
        this.isLoading = false;
      },
      error: (error: any) => console.log(error),
    });
  }

  handleCardClick(slug: string) {
    this.router.navigate(['/phone/', slug]);
  }
}
