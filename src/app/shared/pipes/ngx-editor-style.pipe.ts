import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ngxEdit',
})
export class NgxEditorPipe implements PipeTransform {
  constructor() {}

  transform(value: string) {
    if (!value) {
      return value;
    }
    return value.replace('<p>', '<div>').replace('</p>', '</div>');
  }
}
