import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgerOpen = false;

  ngOnInit(): void {
  }
  
  openHamburger(): void {
    this.hamburgerOpen = ! this.hamburgerOpen;
  }
}
