import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[] ): any {

    let noImageUrl:string = "assets/img/noimage.png";

    return (imagenes && imagenes.length > 1)? imagenes[1].url : noImageUrl;
  }

}
