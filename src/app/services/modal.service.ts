import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private open: boolean = false;
  title: string = 'Modal window';
  description: string = '';
  onAccept: () => void = () => {};

  visibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.visibilityChange.subscribe((value) => {
      this.open = value;
    });
  }

  isOpen() {
    return this.open;
  }

  toggleModal() {
    this.visibilityChange.next(!this.open);
  }

  closeModal() {
    this.visibilityChange.next(false);
  }

  accept() {
    this.onAccept();
    this.visibilityChange.next(false);
  }

  openModal(title: string, description: string, onAccept: () => void) {
    this.title = title;
    this.description = description;
    this.onAccept = onAccept;
    this.visibilityChange.next(true);
  }
}
