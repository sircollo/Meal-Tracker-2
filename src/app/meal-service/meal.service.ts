import { Injectable } from '@angular/core';
import { meals } from '../mealLists';
@Injectable({
  providedIn: 'root'
})
export class MealService {
  getMeals(){
    return meals
  }

  constructor() { }
}
