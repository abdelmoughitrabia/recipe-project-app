import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredients.splice(1, this.ingredients.indexOf(ingredient));
  }


}
