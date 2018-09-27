import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showhidesidebar:boolean=false;
  onShoxsidebarchange(showhidesidebar)
  {
    this.showhidesidebar=showhidesidebar;
  }

  constructor() { }

  ngOnInit() {
  }

}
