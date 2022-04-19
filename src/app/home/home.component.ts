import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoImg:string="assets/Images/1.PNG";
  backgroundImg:string="assets/Images/2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
