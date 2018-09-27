import {Component, OnInit} from '@angular/core';
import {AppService} from "./Services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showhidesidebar:boolean=false;
  onShoxsidebarchange(showhidesidebar)
  {
  this.showhidesidebar=showhidesidebar;
  }
  constructor(private appservice:AppService,private router:Router)
  {

  }

  ngOnInit(): void {
    if(!this.appservice.authenticated)
      this.router.navigateByUrl("/login");
    else
      this.router.navigateByUrl("/home");
  }
}
