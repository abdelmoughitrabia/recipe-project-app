import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('Beef', 'recipe cooking beef meat '
      , 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
    , new Recipe('Tajin', 'Chicken, Recipe, Flat, Grilling'
      , 'https://www.maxpixel.net/static/photo/1x/Recipe-Flat-Grilling-Thigh-Chicken-Barbecue-3447092.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
