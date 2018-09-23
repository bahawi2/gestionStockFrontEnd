import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showsidebar:boolean;

  @Output()
  showsidebarchange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  afficherSideBar()
  {
   this.showsidebar = !this.showsidebar;
   this.showsidebarchange.emit(this.showsidebar);

  }
  logout(){

  }
}
