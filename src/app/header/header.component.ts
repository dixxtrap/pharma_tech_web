import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgerOpen = false;
  shoppingOpen = false;
  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  onContinue() {
    this.router.navigate(['/login']);
  }

  openShopping(){
    this.shoppingOpen = ! this.shoppingOpen;
  }
  openHamburger(): void {
    this.hamburgerOpen = ! this.hamburgerOpen;
  }
}
