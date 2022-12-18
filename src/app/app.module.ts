import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AddCourseModule } from './routes/add-course/add-course.module';
import { LoginModule } from './routes/login/login.module';
import { CoursesModule } from './routes/courses/courses.module';

// Components
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

// Directives
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { IfGuestDirective } from './directives/if-guest.directive';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    IfAuthenticatedDirective,
    IfGuestDirective,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AddCourseModule, LoginModule, CoursesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
