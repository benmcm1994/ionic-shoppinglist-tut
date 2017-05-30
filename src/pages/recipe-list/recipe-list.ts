import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRecipePage } from "../edit-recipe/edit-recipe";
import { RecipesService } from "../../services/recipes";
import { Recipe } from "../../models/recipe";
import { RecipePage } from "../recipe/recipe";

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  recipes: Recipe[];

  constructor(private navCtrl: NavController, private recipesService: RecipesService) {

  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: "New"});
  }

  loadRecipeList(){
    this.recipes = this.recipesService.getRecipes();
  }

  onLoadRecipe(recipe: Recipe, index: number){
    this.navCtrl.push(RecipePage, {recipe: recipe, index: index});
  }


}
