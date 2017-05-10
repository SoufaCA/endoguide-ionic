/**
 * Created by msi-pc on 5/10/2017.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToothModel} from "../../app/models/tooth-model";

@Component({
  selector: 'teeth',
  templateUrl: 'teeth.html'
})
export class TeethPage {

  teeth: Array<ToothModel>;
  grid: Array<Array<ToothModel>>;

  constructor(public navCtrl: NavController) {
    this.teeth = Array();
    this.teeth.push(new ToothModel("Tooth 1","Description 1"));
    this.teeth.push(new ToothModel("Tooth 2","Description 2"));
    this.teeth.push(new ToothModel("Tooth 3","Description 3"));
    this.teeth.push(new ToothModel("Tooth 4","Description 4"));
    this.teeth.push(new ToothModel("Tooth 5","Description 5"));

    this.grid = Array(Math.ceil(this.teeth.length/2));

    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.teeth.length; i+=2) { //iterate images

      this.grid[rowNum] = Array(2); //declare two elements per row

      if (this.teeth[i]) { //check file URI exists
        this.grid[rowNum][0] = this.teeth[i] //insert image
      }

      if (this.teeth[i+1]) { //repeat for the second image
        this.grid[rowNum][1] = this.teeth[i+1]
      }

      rowNum++; //go on to the next row
    }
  }

}
