import {AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import {GroceriesServiceProvider} from '../../providers/groceries-service/groceries-service';
import {InputDialogServiceProvider} from '../../providers/input-dialog-service/input-dialog-service';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//Defining a variable called title to hold the value of ion title in ion toolbar
  title = "Grocery";

//injecting ToastController and AlertController in the constructor
constructor(public navCtrl : NavController, public toastCtrl : ToastController, public alertCtrl : AlertController, public dataService : GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }
  //Defining removeItem function for removing items and show the removed item in a toast
  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this
    .toastCtrl
    .create({message: 'Removing Item - ' + index + "...", duration: 3000});
    toast.present();
    this.dataService.removeItem(index);
    
}
//Editing item function
  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this
      .toastCtrl
      .create({ message: 'Editing Item - ' + index + "...", duration: 3000 });
    toast.present();
    //opening alert box in editing mode
    this.inputDialogService.showPrompt(item, index);
    
  }
  //Adding item function
   addItem(){
     console.log("Adding item")
     //opening alert box in adding mode
     this.inputDialogService.showPrompt();
   }

  }


