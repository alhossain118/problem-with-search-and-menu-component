import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  constructor() {}

  transform(value: string, format?: string, tbd = false, time = false) {
    if (!value) {
      return value;
    }
    if (tbd) {
      return `${dayjs(value).format(format ? format : 'MMMM YYYY')} (TBD)`;
    }
    if (time) {
      return dayjs(value + ':00', 'HH:mm:ss').format('hh:mm A');
    }
    return dayjs(value).format(format ? format : 'MMMM DD, YYYY');
  }
}
