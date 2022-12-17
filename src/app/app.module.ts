import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AddCourseModule } from './routes/add-course/add-course.module';
import { LoginModule } from './routes/login/login.module';

// Components
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { OrderSwitcherComponent } from './components/order-switcher/order-switcher.component';
import { NoCoursesComponent } from './components/no-courses/no-courses.component';
import { ModalComponent } from './components/modal/modal.component';

// Pipes
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

// Directives
import { CourseStatusDirective } from './directives/course-status.directive';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { IfGuestDirective } from './directives/if-guest.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    CourseListComponent,
    LoadMoreComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    OrderSwitcherComponent,
    NoCoursesComponent,
    CourseStatusDirective,
    ModalComponent,
    IfAuthenticatedDirective,
    IfGuestDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AddCourseModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
