import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Meal } from '../meal';
@Component({
  selector: 'app-meal-edit-form',
  templateUrl: './meal-edit-form.component.html',
  styleUrls: ['./meal-edit-form.component.css']
})
export class MealEditFormComponent implements OnInit {
  @Input() mealToEdit:Meal[]=[];
  @Output() updated = new EventEmitter();
  constructor() { }

  updateMeal(){
    this.updated.emit();
  }

  ngOnInit(): void {
  }

}
