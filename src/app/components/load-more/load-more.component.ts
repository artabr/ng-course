import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
})
export class LoadMoreComponent implements OnInit {
  @Output() eventMessageText = new EventEmitter<string>();
  constructor() {}

  onClick(event?: MouseEvent) {
    const eventMessage = event ? 'Event target innerText is: ' + (event.target as HTMLElement).innerText : '';
    this.eventMessageText.emit('eventMessageText');
    console.log(`Clicked. ${eventMessage}`);
  }

  ngOnInit(): void {
    console.log();
  }
}
