import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items: any[], text?: any): any {
    if(!text){
      return items;
    }
    return items.filter((item)=>{
      if(item.display && typeof item.display === 'string'){
        return item.display.toLowerCase().indexOf(text.toLowerCase())> -1;
      }
      return false;
    })
  }
}
