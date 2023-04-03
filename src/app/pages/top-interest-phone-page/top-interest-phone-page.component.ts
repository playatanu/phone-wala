import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPhone } from 'src/app/core/interfaces/response.interface';
import { PhoneService } from 'src/app/core/services/phone.service';

@Component({
  selector: 'app-top-interest-phone-page',
  templateUrl: './top-interest-phone-page.component.html',
  styleUrls: ['./top-interest-phone-page.component.css'],
})
export class TopInterestPhonePageComponent {
  public title: string = '';
  public phones: Array<any> = [];

  public isLoading: boolean = false;

  constructor(private phoneService: PhoneService, private router: Router) {}

  ngOnInit() {
    this.getLatestPhones();
  }

  getLatestPhones() {
    this.isLoading = true;

    this.phoneService.getTopByInterestPhones().subscribe({
      next: (res: any) => {
        var searchRes = res.data;
        this.title = searchRes.title;
        this.phones = searchRes.phones;
        this.isLoading = false;
      },
      error: (error: any) => console.log(error),
    });
  }

  handleCardClick(slug: string) {
    this.router.navigate(['/phone/', slug]);
  }
}
