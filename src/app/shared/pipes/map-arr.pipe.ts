import { Pipe, PipeTransform } from '@angular/core';

interface ObjBolean {
  [key: string]: boolean
}

@Pipe({
  name: 'mapArr'
})
export class MapArrPipe implements PipeTransform {

  transform(obj: ObjBolean, value: string | number): string[] {

    return Object.entries(obj).reduce((acc, v) => {
      v[1] && acc.push(value + v[0])
      return acc
    }, [])
  }

}
