import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'SME Cross-Border Trade';

  navLinks = [
    {
      path: 'chart',
      label: 'Data'
    },
   {
      path: 'newsfeed',
      label: 'Newsfeed'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
