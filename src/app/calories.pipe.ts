import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal';
@Pipe({
  name: 'calories'
})
export class CaloriesPipe implements PipeTransform {

  transform(input:Meal[],caloriesSize:any){
    let size:Meal[]=[];
    if(caloriesSize === "low"){
      for(var i=0;i<input.length;i++){
        if(input[i].calories<200){
          size.push(input[i]);
        }
      }
      return size;
    } else if (caloriesSize === "high"){
      for(var i=0;i<input.length;i++){
        if(input[i].calories>=300){
          size.push(input[i]);
        }
      }
      return size;
    }
    else {
      return input;
    }
  }

}
