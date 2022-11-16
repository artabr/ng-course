import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { first } from 'rxjs';
import { Course } from '../../types/types';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the deleteCard event when clicked', () => {
    const comp = new CourseCardComponent();
    const course: Course = {
      id: '1',
      title: 'Title',
      creationDate: '1000',
      duration: 100,
    };
    comp.course = course;

    comp.deleteCard.pipe(first()).subscribe((deletedCard) => expect(deletedCard).toBe(course.id));
    comp.onDeleteClick();
  });
});
