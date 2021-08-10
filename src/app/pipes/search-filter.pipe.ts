import { Pipe, PipeTransform } from '@angular/core';
import { BenhTheoICD10 } from '../models/BenhTheoICD10.models';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(BenhTheoICD10: BenhTheoICD10[], searchValue: string): any {
    if (!BenhTheoICD10 || !searchValue) {
      return BenhTheoICD10;
    }
    return BenhTheoICD10.filter((benh) =>
      benh.tenBenh.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
