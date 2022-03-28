import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentFrequency'
})
export class PaymentFrequencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
