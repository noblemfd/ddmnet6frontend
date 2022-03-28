import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStatus'
})
export class ToStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
