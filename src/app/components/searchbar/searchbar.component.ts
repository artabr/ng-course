import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {
  inputText: string = '';
  @Input() searchText?: string;
  @Output() searchTextChange = new EventEmitter<string>();

  constructor() {}

  onInputText() {
    this.searchTextChange.emit(this.inputText);
  }

  onSearchClick() {
    console.log(`Input text is: ${this.inputText}`);
  }

  ngOnInit(): void {
    console.log();
  }
}
