import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-barnav',
  templateUrl: './nav-barnav.component.html',
  styleUrls: ['./nav-barnav.component.css']
})

export class NavBarnavComponent implements OnInit {
  
  navRouter: Array<any> ;

  constructor () {

    this.navRouter=[];

  }
  
  
  ngOnInit(): void {
    this.navRouter=[

      {routerName:'parent', displayName:'Parent'},
      {routerName:'dashboard', displayName:'DashBoard'},
      {routerName:'banner', displayName:'Banner'},
    ]


  }

}
