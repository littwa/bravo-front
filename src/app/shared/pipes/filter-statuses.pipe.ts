import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatuses'
})
export class FilterStatusesPipe implements PipeTransform {

  transform(value: string[], filtering: string): unknown {
    return value.filter(s => s !== filtering);
  }

}
