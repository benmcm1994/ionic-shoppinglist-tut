import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredient[];

  constructor(private shoppingListService: ShoppingListService){}

    ionViewWillEnter() {
     this.listItems = this.shoppingListService.getItems();
    }

    onAddItem(form: NgForm) {
      this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
      form.reset();
      this.loadItems();
    }

    onRemoveItem(index: number){
      this.shoppingListService.removeItem(index);
      this.loadItems();
    }

    private loadItems(){
      this.listItems = this.shoppingListService.getItems();
    }
}
