import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Recipe } from "../../models/recipe";
import { RecipesService } from "../../services/recipes";
import { EditRecipePage } from "../edit-recipe/edit-recipe";
import { ShoppingListService } from "../../services/shopping-list";
import { RecipeListPage } from "../recipe-list/recipe-list";

/**
 * Generated class for the RecipePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{

  recipe: Recipe;
  index: number;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private navParams: NavParams, private recipesService: RecipesService, private shoppingService: ShoppingListService) {}

  ngOnInit() {
    this.recipe = this.navParams.get("recipe");
    this.index = this.navParams.get("index");
  }

  onEditRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onAddIngredients(){
    this.shoppingService.addItems(this.recipe.ingredients);
  }

  onRemoveRecipe(){
    this.recipesService.removeRecipe(this.index);
    const toast = this.toastCtrl.create({message: "Recipe deleted", duration: 1000, position: 'center'});
    toast.present();
    this.navCtrl.popToRoot(RecipeListPage);
  }

}
