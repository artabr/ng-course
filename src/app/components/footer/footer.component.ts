import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  @Output() fetchApi = new EventEmitter<void>();

  constructor() {}

  onFetchClick() {
    this.fetchApi.emit();
  }

  ngOnInit(): void {
    console.log();
  }
}
