import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-medoc-detail-pharma',
  templateUrl: './medoc-detail-pharma.component.html',
  styleUrls: ['./medoc-detail-pharma.component.css']
})
export class MedocDetailPharmaComponent implements OnInit {
 
  hamburgerOpen = false;

  ngOnInit(): void {
  }
  
  openHamburger(): void {
    this.hamburgerOpen = ! this.hamburgerOpen;
  }

}
