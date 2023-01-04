import { Injectable } from '@angular/core';
import { Course, CourseResponse } from '../types/types';
import { v4 as uuid } from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [];

  constructor(private http: HttpClient) {
    console.log('Created new CoursesService.');
    this.getCourses();
  }

  getCourses(callback?: (response: Course[]) => void) {
    this.http
      .get<CourseResponse[]>('https://angularmentoringserver.onrender.com/courses?start=0&count=10')
      .subscribe((response) => {
        if (response) {
          this.courses = response.map((item) => ({
            ...item,
            title: item.name,
            creationDate: item.date,
            duration: item.length,
            id: item.id.toString(),
          }));
          if (callback) callback(this.courses);
        }
      });
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
