import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  value = 0;
  numberGroups = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
  ];
  
  onButtonPress(num){
    console.log(num);
  }
}
