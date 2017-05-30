import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { RecipeListPage } from "../pages/recipe-list/recipe-list";
import { TabsPage } from '../pages/tabs/tabs';
import { EditRecipePage } from "../pages/edit-recipe/edit-recipe";
import { RecipePage } from "../pages/recipe/recipe";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShoppingListService } from "../services/shopping-list";
import { RecipesService } from "../services/recipes";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    RecipeListPage,
    TabsPage,
    EditRecipePage,
    RecipePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    RecipeListPage,
    TabsPage,
    EditRecipePage,
    RecipePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService
  ]
})
export class AppModule {}
