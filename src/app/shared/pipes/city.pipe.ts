import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, merge } from 'rxjs';
import { delay, startWith, map } from 'rxjs/operators';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): Observable<string> {

    let short: string;
    let long: string;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break; 
      default:
        short = long = value;
    }

    if (fmt === 'short') {
      return merge(
          of('Default')
            .pipe(
              map(val => ({
                type: 'stream1',
                value: val
              }))
            ),
          of(short)
          .pipe(
            map(val => ({
              type: 'stream1',
              value: val
            })),
            delay(3000)
          )
      )
      .pipe(
        map(o => o.value)
      );
    }

    return of(long);
  }
}
