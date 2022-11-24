import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  inputText: string = '';
  consoleText: string = '';
  @Input() searchText?: string;
  @Output() searchTextChange = new EventEmitter<string>();
  @Output() searchClick = new EventEmitter<string>();

  constructor() {}

  onInputText() {
    this.searchTextChange.emit(this.inputText);
  }

  onSearchClick() {
    this.searchClick.emit(this.inputText);
  }
}
