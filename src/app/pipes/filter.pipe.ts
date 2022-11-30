import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../types/types';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: Course[] | undefined, searchText?: string): Course[] {
    if (!value) return [];

    return value.filter((course) => course.title.toLowerCase().includes(searchText?.toLowerCase() ?? ''));
  }
}
