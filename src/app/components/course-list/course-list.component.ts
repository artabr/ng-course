import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, ListOrder } from '../../types/types';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  @Input() courses?: Course[];
  @Input() order?: ListOrder;
  @Input() searchText?: string;
  @Output() coursesChange = new EventEmitter();

  constructor(private coursesService: CoursesService, private modalService: ModalService) {}

  onDeleteCard(event: string) {
    console.log('Card deleted. The ID:', event);
    this.modalService.openModal('Delete item?', 'Do you really want to delete this item?', () => {
      this.coursesService.removeCourse(event, () => this.coursesChange.emit());
      // TODO как сделать, чтобы не добавлять сюда этот эммитер?
      // ? эммитер нужен чтобы сообщить о том, что родительскому компоненту, что состояние изменилось
    });
    // TODO можно ли изменить corses на уровне этого компонета не сообщая родителю?
    // ? сейчас флоу такой: после успешного выполнения сервиса modal сообщаем родителю об изменении состояния
    // ? он запрашивает новые данные у сервиса cources, они прорастают вниз в этот же компонент
    // ? можно ли не делать такой флоу, а сразу изменить cources здесь. Как принято в angular?
    this.coursesChange.emit();
  }

  trackByCourses(index: number, course: Course): string {
    return course.id;
  }
}
