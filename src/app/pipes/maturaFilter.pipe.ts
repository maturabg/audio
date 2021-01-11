/* 
 * Thanks @phuc77 https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
 */


import { Pipe, PipeTransform } from '@angular/core';

import { Matura } from '../models/matura';

@Pipe({
    name: 'maturaFilter',
    pure: false
})
export class MaturaFilterPipe implements PipeTransform {
  transform(items: Matura[], year: number): Matura[] {
    if (!items || !year) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Matura) => this.applyYearFilter(item, year));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Matura} matura The matura to compare to the filter.
   * @param {number} year The filter to apply.
   * @return {boolean} True if matura satisfies filters, false if not.
   */
  applyYearFilter(matura: Matura, year: number): boolean {
      if (matura.year === year) {
          return true;
      }
    return false;
  }

  applyTypeFilter(matura: Matura, type: string): boolean {
    if (matura.type === type) {
        return true;
    }
  return false;
}
}
