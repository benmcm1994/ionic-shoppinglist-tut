import { Component } from '@angular/core';
import { ShoppingListPage } from "../shopping-list/shopping-list";
import { RecipeListPage } from "../recipe-list/recipe-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShoppingListPage;
  tab2Root = RecipeListPage;

  constructor() {

  }
}
