import { Component, Input, OnInit } from '@angular/core';
import { Medoc } from '../model/medoc';

@Component({
  selector: 'app-search-medoc',
  templateUrl: './search-medoc.component.html',
  styleUrls: ['./search-medoc.component.css']
})
export class SearchMedocComponent implements OnInit {

  @Input() medoc!:Medoc;

  constructor() { }

  ngOnInit(): void {
    
  }

}
