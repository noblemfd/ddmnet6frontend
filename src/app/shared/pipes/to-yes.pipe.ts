import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toYes'
})
export class ToYesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
