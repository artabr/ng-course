import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value?: number, ...args: unknown[]): unknown {
    if (!value) return '';

    const hours = Math.trunc(value / 60);
    const hoursFormatted = hours === 0 ? '' : `${hours} h `;
    const minutes = value % 60;
    return `${hoursFormatted}${minutes} min`;
  }
}
