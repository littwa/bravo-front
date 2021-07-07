import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filterStatuses'
})
export class FilterStatusesPipe implements PipeTransform {

  transform(value: string[], filtering: string, role?: any): unknown {
    let arr = value;
    if (!(filtering === "new")) arr = value.filter(s => s !== "canceled")
    return arr.filter(s => s !== filtering);

  }

}
