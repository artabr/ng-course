import { Pipe, PipeTransform } from '@angular/core';
import { Course, ListOrder } from '../types/types';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderByPipe implements PipeTransform {
  transform(value?: Course[], order?: ListOrder): Course[] {
    if (!value) return [];

    if (order === 'ASC') return value.sort((a, b) => a.duration - b.duration);

    if (order === 'DESC') return value.sort((a, b) => b.duration - a.duration);

    return value;
  }
}
