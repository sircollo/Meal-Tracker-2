import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal-service/meal.service';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals:Meal[];
  // meals:Meal[]=[
  //   new Meal("Chicken",239,"Bought from Chicken inn"),
  //   new Meal("Pizza",266,"Bought from Pizza inn"),
  //   new Meal("burger",560,"its not healthy"),
  //   new Meal("beef",600,"its not healthy"),
  //   new Meal("fries",700,"its not healthy"),
  //   new Meal("ugali",150,"its not healthy"),
  //   new Meal("rice",400,"its not healthy")
  // ];
    @Input()
    inputMealList: Meal[] = [];
    @Output()    
    outputDetails = new EventEmitter();
    addNewMeal(meals:any){
    let mealLength = this.meals.length;
    meals.id = mealLength+1;     
    this.meals.push(meals)
  }

  viewHighFoods(){

  }
  viewLowFoods(){

  }
  editMeal(meals:any){
    this.outputDetails.emit(meals)    
  }
  deleteMeal(meals:any){
    this.meals.splice(meals,1)
  }
  // showMealDetailToEdit($event){
  //   this.
  // }
  resetSelection(){
    this.meals!=null;
  }

  constructor(mealService:MealService) {
    this.meals = mealService.getMeals()
   }

  ngOnInit(): void {
  }

}
