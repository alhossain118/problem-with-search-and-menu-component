import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingBlockchainFilter',
  pure: false,
})
export class UpcomingBlockchainFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!filter) {
      return items;
    }

    return items.filter(
      (item: any) => item.blockchain.toLowerCase() === filter.toLowerCase()
    );
  }
}
