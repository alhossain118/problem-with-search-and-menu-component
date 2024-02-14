import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metaversefilter',
  pure: false,
})
export class MetaverseFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!filter) {
      return items;
    }

    const filteredArray = [];

    for (let item of items) {
      for (let key in item.tags) {
        if (key === filter && item.tags[key]) {
          filteredArray.push(item);
        }
      }
    }

    return filteredArray;
  }
}
