import { IPhone } from 'src/app/core/interfaces/response.interface';
import { Component } from '@angular/core';
import { PhoneService } from 'src/app/core/services/phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-fans-phone-page',
  templateUrl: './top-fans-phone-page.component.html',
  styleUrls: ['./top-fans-phone-page.component.css'],
})
export class TopFansPhonePageComponent {
  public title: string = '';
  public phones: Array<any> = [];

  public isLoading: boolean = false;

  constructor(private phoneService: PhoneService, private router: Router) {}

  ngOnInit() {
    this.getLatestPhones();
  }

  getLatestPhones() {
    this.isLoading = true;

    this.phoneService.getTopByFanPhones().subscribe({
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
