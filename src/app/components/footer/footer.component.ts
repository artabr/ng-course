import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Output() fetchApi = new EventEmitter<void>();

  constructor() {}

  onFetchClick() {
    this.fetchApi.emit();
  }
}
