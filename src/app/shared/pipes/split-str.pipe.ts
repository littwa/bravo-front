import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitStr'
})
export class SplitStrPipe implements PipeTransform {

  transform(value: string): string {

    return value.toLowerCase().trim().replace(" ", "-")
  }

}
