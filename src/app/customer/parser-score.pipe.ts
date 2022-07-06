import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parserScore'
})
export class ParserScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value + 5;
  }

}
