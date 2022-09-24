import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medoc-pharma',
  templateUrl: './medoc-pharma.component.html',
  styleUrls: ['./medoc-pharma.component.css']
})
export class MedocPharmaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onclick(){
    this.router.navigate(['id']);
  }
}
