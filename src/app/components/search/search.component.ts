import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchInput!: FormControl;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.searchForm();
  }

  private searchForm(): void {
    this.appService.searchValue$.subscribe((searchValue: string) => {
      this.searchInput = new FormControl(searchValue, [Validators.required]);
    });
  }

  public searchAnnouncement(): void {
    this.appService.searchValue$.next(
      this.searchInput.value.trim()
        ? this.searchInput.value
        : this.searchInput.value.trim()
    );
  }
}
