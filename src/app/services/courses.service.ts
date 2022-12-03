import { Injectable } from '@angular/core';
import { Course } from '../types/types';
import { courses } from '../../mocks/mockData';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [];

  constructor() {
    console.log('Created new CoursesService.');
    this.courses = courses;
  }

  getCourses() {
    return this.courses;
  }

  createCourse(newCourseData: Omit<Course, 'id'>) {
    this.courses.push({ id: uuid(), ...newCourseData });

    return this.courses;
  }

  getCourseById(id: string) {
    return this.courses.find((course) => course.id === id);
  }

  updateCourse(course: Course) {
    this.courses = this.courses.map((item) => {
      if (item.id === course.id) return course;
      return item;
    });

    return course;
  }

  removeCourse(id: string) {
    const removedCourse = this.getCourseById(id);

    this.courses = this.courses.filter((item) => item.id !== id);

    return removedCourse;
  }
}
