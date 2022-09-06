// import {NgModule} from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { Medoc } from '../model/medoc';

@Component({
  selector: 'app-medoc-list',
  templateUrl: './medoc-list.component.html',
  styleUrls: ['./medoc-list.component.css']
})
export class MedocListComponent implements OnInit {

 searchText!:string;
  medocs!:Medoc[];

  constructor() { }

  ngOnInit(): void {
    this.medocs=[
      {
        title:'ABUFENE 400 mg 30 comprimés',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/abufene.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'EXOMUC 200 mg sans eau 15 sachets',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/exomuc.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'IBUPRADOLL ibuprofene 400 mg 10 capsules molles',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/ibupradol.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'NICORETTE Gomme Menthe Fraîche 2 mg Sans Sucre boîte de 210',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/nicorette.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'EXOMUC 200 mg sans eau 15 sachets',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/exomuc.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'IBUPRADOLL ibuprofene 400 mg 10 capsules molles',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/ibupradol.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'NICORETTE Gomme Menthe Fraîche 2 mg Sans Sucre boîte de 210',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/nicorette.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      },
      {
        title:'ABUFENE 400 mg 30 comprimés',
        description:'IBUPRADOLL 400 mg en capsules molles est conseillé aux adultes et aux enfants de plus de 10 ans. Pour les enfants de 11 à 12 ans (environ de plus de 30 kg), 1 capsule de IBUPRADOL 400 mg, à renouveler si besoin au bout de 6 heures. Dans tous les cas, ne pas dépasser 3 capsules par jour.',
        image:'assets/images/abufene.png',
        category:'Fievre',
        modeUtilisation:'matin/soir',
        prix:500
      }
    ]
  }


}
