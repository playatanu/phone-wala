import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/core/services/phone.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  public brands: Array<any> = [];
  public title: string = 'Brands';
  public isLoading: boolean = false;

  constructor(private phoneService: PhoneService, private router: Router) {}

  ngOnInit() {
    this.getBrands();
  }

  getBrands() {
    this.isLoading = true;

    this.phoneService.getBrands().subscribe({
      next: (res: any) => {
        this.brands = res.data;
        this.isLoading = false;
      },
      error: (error: any) => console.log(error),
    });
  }

  handleCardClick(slug: string) {
    this.router.navigate(['/brands/', slug]);
  }
}
