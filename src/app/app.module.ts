import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FormsModule } from '@angular/forms';
import { CaloriesPipe } from './calories.pipe';
import { MealEditFormComponent } from './meal-edit-form/meal-edit-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealComponent,
    MealFormComponent,
    CaloriesPipe,
    MealEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
