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

  constructor() {}

  onInputText() {
    this.searchTextChange.emit(this.inputText);
  }

  onSearchClick() {
    this.consoleText = `Input text is: ${this.inputText}`;
    console.log(this.consoleText);
  }
}
