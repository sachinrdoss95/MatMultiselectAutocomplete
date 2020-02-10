import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {
  transform(dropdownList: any[], filterObj: any): any {
    const filterStringLower = filterObj.filterKey.toLowerCase();
    return dropdownList.filter(x => {
      return (x[filterObj.displayKey].toLowerCase().includes(filterStringLower) ||
      (filterObj.infoKey) ? x[filterObj.infoKey].toLowerCase().includes(filterStringLower) : false);
    });
  }
}
