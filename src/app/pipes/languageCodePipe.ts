import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageCode',
  pure: false
})
export class LanguageCodePipe implements PipeTransform {
  transform(languageCode: string): string {
    if (!languageCode) {
      return languageCode;
    }

    return this.performConversion(languageCode);
  }

  /**
   * Perform the filtering.
   * 
   * @param {string} languageCode Three letter language code to transform
   * @return {string} The language in Bulgarian.
   */
  private performConversion(languageCode: string): string {
    switch (languageCode) {
      case "eng":
        return "английски";
      case "deu":
        return "немски";
      case "fra":
        return "френски";
      case "spa":
        return "испански";
      case "ita":
        return "италиански";
      case "rus":
        return "руски";
      default:
        // invalid call
        return languageCode;
    }
  }
}
