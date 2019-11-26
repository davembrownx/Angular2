import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'DevBios';
  myColor = 'orange';
  myClass='PURPLE';
  constructor(){}
  myChangeColor(){
    if (this.myClass=='PURPLE'){
      this.myClass='GREEN';
      this.myColor='green';
    } else {
      this.myClass='PURPLE';
      this.myColor='purple'
    }
  }
  ngOnInit() {
  }
}