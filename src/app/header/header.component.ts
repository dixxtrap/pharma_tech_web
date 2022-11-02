import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

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
  constructor(private router: Router,private userAuth:UserAuthService) {}

  openShopping(){
    this.shoppingOpen = ! this.shoppingOpen;
  }
  openHamburger(): void {
    this.hamburgerOpen = ! this.hamburgerOpen;
  }

  public isLogger(){
    return this.userAuth.isLoggedIn();
  }

  public logout(){
    this.userAuth.clear();
    this.router.navigate(['/home']);
  }
}
