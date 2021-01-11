import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maturaType',
  pure: false
})
export class MaturaTypePipe implements PipeTransform {
  transform(maturaType: string): string {
    if (!maturaType) {
      return maturaType;
    }

    return this.performConversion(maturaType);
  }

  /**
   * Perform the filtering.
   * 
   * @param {string} maturaType The matura type to transform - in Cyrillic (Bulgarian). Only valid matura types are transformed
   * @return {string} The matura type in Latin (shliokavitsa).
   */
  private performConversion(maturaType: string): string {
    switch (maturaType) {
      case "ДЗИ":
        return "dzi";
      case "НВО":
        return "nvo";
      case "dzi":
        return "ДЗИ";
      case "nvo":
        return "НВО";
      default:
        // invalid call
        return maturaType;
    }
  }
}
