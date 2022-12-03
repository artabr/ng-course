import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  open: boolean = false;
  title: string = 'Modal window';
  description: string = '';

  constructor(private modalService: ModalService) {
    this.open = modalService.isOpen();
    this.modalService.visibilityChange.subscribe((value) => {
      this.title = this.modalService.title;
      this.description = this.modalService.description;
      this.open = value;
    });
  }

  onClose() {
    this.modalService.closeModal();
  }

  onAccept() {
    this.modalService.accept();
  }
}
