import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight',
  standalone: true
})
export class TextHighlightPipe implements PipeTransform {

  transform(value: string, search: string|null): unknown {
    if (search)
      return value.replaceAll(search, `<span class="highlight"> ${search}</span>`);
    return value
  }

}

