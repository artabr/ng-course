import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
})
export class LoadMoreComponent implements OnInit {
  constructor() {}

  onClick(event?: MouseEvent) {
    const eventMessage = event ? 'Event target innerText is: ' + (event.target as HTMLElement).innerText : '';
    console.log(`Clicked. ${eventMessage}`);
  }

  ngOnInit(): void {
    console.log();
  }
}
