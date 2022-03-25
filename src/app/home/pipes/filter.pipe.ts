import { Pipe, PipeTransform } from '@angular/core';
import { ProjectInterface } from '../types/project.interface';

@Pipe({
  name: 'filterTags',
})
export class FilterTagsPipe implements PipeTransform {
  transform(
    items: ProjectInterface[] | null,
    ...args: string[]
  ): ProjectInterface[] | null {
    if (!items) {
      return items;
    }

    if (!args.length || !args[0] || args[0]==="all") {
      return items;
    }
    let filterText: string = args[0].toLowerCase();
    return items.filter((item) => {
      return item.tags.includes(filterText);
    });
  }
}
