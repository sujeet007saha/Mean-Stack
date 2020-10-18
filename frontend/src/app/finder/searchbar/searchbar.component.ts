import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchField: FormControl;
  @Output() search = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(250),
    distinctUntilChanged(), startWith('')).subscribe(data => {
      this.search.emit(data);
    });
  }

}
