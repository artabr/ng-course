import { Directive, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appIfGuest]',
})
export class IfGuestDirective {
  constructor(private element: ElementRef, private authService: AuthService) {
    this.authService.authenticatedChange.subscribe((value) => {
      if (value) {
        this.hide();
      } else {
        this.show();
      }
    });
    if (this.authService.isAuthenticated()) this.hide();
  }

  hide() {
    this.element.nativeElement.style.display = 'none';
  }

  show() {
    this.element.nativeElement.style.display = 'block';
  }
}
