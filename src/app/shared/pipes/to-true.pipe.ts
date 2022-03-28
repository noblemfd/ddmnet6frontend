import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTrue'
})
export class ToTruePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
