import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {
//defining items as an array
items = [];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }
  //function for getting groceries items
  getItems() {
    return this.items;
  }
  //function for removing the items
  removeItem(index){
   this .items.splice(index, 1);
  }
  //function for adding the items
  addItem(item) {
    this.items.push(item);
  }
 //function for editing the items
  editItem(item, index) {
    this.items[index] = item;
  }
}
