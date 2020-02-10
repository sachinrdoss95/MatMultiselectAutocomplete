import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {
  transform(dropdownList: any[], filterObj: any): any {
    const filterStringLower = filterObj.filterKey.toLowerCase();
    return dropdownList.filter(x => {
      let returnVal = x[filterObj.displayKey].toLowerCase().includes(filterStringLower);
      if (filterObj.infoKey) {
        returnVal = returnVal || x[filterObj.infoKey].toLowerCase().includes(filterStringLower);
      }
      return returnVal;
    });
  }
}
