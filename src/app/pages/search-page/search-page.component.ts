import { PhoneService } from './../../core/services/phone.service';
import { Component } from '@angular/core';
import { ISearch, IPhone } from 'src/app/core/interfaces/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  public title: string = '';
  public phones: Array<IPhone> = [];

  public isLoading: boolean = false;

  constructor(private phoneService: PhoneService, private router: Router) {}

  handlesearch(searchBox: any) {
    if (searchBox.value == '') return;

    this.isLoading = true;
    this.title = '';

    this.phoneService.searchPhone(searchBox.value).subscribe({
      next: (res: any) => {
        var searchRes = res.data as ISearch;
        this.title = searchRes.title;
        this.phones = searchRes.phones;
        this.isLoading = false;
      },
      error: (error: any) => console.log(error),
    });
  }

  handleSearchCardClick(slug: string) {
    this.router.navigate(['/phone/', slug]);
  }
}
