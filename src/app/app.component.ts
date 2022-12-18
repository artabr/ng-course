import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-course';
  route: 'main' | 'new-course' = 'main';

  constructor() {}
}
