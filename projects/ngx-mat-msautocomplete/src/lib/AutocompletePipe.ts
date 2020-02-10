import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {
  transform(dropdownList: any[], filterString: string): any {
    const filterStringLower = filterString.toLowerCase();
    return dropdownList.filter(x => {
      return (x.display.toLowerCase().includes(filterStringLower));
    });
  }
}
