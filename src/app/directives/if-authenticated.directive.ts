import { Directive, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective {
  constructor(private element: ElementRef, private authService: AuthService) {
    this.authService.authenticatedChange.subscribe((value) => {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    });
    if (!this.authService.isAuthenticated()) this.hide();
  }

  hide() {
    this.element.nativeElement.style.display = 'none';
  }

  show() {
    this.element.nativeElement.style.display = 'block';
  }
}
