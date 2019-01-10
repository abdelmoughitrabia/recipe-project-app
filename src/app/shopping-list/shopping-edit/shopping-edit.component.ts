import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  addIngredient = new EventEmitter<Ingredient>();
  @Output()
  deleteIngredient = new EventEmitter<Ingredient>();

  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  ingredient: Ingredient;

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.getIngredient();
    this.addIngredient.emit(this.ingredient);
    console.log(this.ingredient);
  }

  delete() {
    this.getIngredient();
    this.deleteIngredient.emit(this.ingredient);
    console.log(this.ingredient);
  }

  private getIngredient() {
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  }

  clear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }


}
