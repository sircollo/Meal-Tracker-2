import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealEditFormComponent } from './meal-edit-form.component';

describe('MealEditFormComponent', () => {
  let component: MealEditFormComponent;
  let fixture: ComponentFixture<MealEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
