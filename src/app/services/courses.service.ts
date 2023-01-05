import { Injectable } from '@angular/core';
import { Course, CourseResponse } from '../types/types';
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

  getCourses(callback?: (response: Course[]) => void, textFragment?: string) {
    this.http
      .get<CourseResponse[]>(
        `https://angularmentoringserver.onrender.com/courses?start=0&count=10${
          textFragment && '&textFragment=' + textFragment
        }`,
      )
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

  createCourse(newCourseData: Omit<Course, 'id'>, onSuccess: () => void) {
    this.http
      .post(`https://angularmentoringserver.onrender.com/courses`, {
        id: Math.floor(100000 + Math.random() * 900000),
        name: newCourseData.title,
        date: newCourseData.creationDate,
        length: newCourseData.duration,
        authors: {},
        isTopRated: false,
      })
      .subscribe((response) => {
        if (response) {
          onSuccess();
        }
      });

    return this.courses;
  }

  getCourseById(id: string) {
    return this.courses.find((course) => course.id === id);
  }

  updateCourse(course: Course, onSuccess: () => void) {
    this.http
      .patch(`https://angularmentoringserver.onrender.com/courses/${course.id}`, {
        id: course.id,
        name: course.title,
        date: course.creationDate,
        length: course.duration,
        authors: {},
        isTopRated: false,
      })
      .subscribe((response) => {
        if (response) {
          onSuccess();
        }
      });

    return course;
  }

  removeCourse(id: string, onSuccess: () => void) {
    this.http.delete(`https://angularmentoringserver.onrender.com/courses/${id}`).subscribe((response) => {
      if (response) {
        onSuccess();
      }
    });
  }
}
