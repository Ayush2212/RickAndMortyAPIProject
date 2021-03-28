import { Component, OnInit, ViewChild  } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor() {}

  @ViewChild(HomepageComponent) home: HomepageComponent

  query: string = null
  ngOnInit(): void {}
  handleSearch() {
    this.home.handleQuery()
  }
}
