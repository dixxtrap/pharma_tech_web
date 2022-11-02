import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MapDirectionsRenderer } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { MedocDetailPharmaComponent } from '../home-page-pharma/components/medoc-detail-pharma/medoc-detail-pharma.component';
import { ListPanierComponent } from '../list-panier/list-panier.component';
import { Medicaments } from '../models/medicaments';
import { ImageServiceService } from '../services/image-service.service';
import { MedicamentsService } from '../services/medicaments.service';
import { ShowImageComponent } from '../show-image/show-image.component';


@Component({
  selector: 'app-list-medoc',
  templateUrl: './list-medoc.component.html',
  styleUrls: ['./list-medoc.component.css']
})
export class ListMedocComponent implements OnInit {
  displayedColumns: string[] = ['idMedic', 'nomMedica', "dateCreationMedoc",'Images','Edit'];
listMedoc:Medicaments[]=[];
  constructor(private medicamentsServ:MedicamentsService,public imagesDial:MatDialog,private imageService:ImageServiceService) { }

  ngOnInit(): void {
    this.getAllMedoc();
  }
  getAllMedoc(){
    this.medicamentsServ.getAllMedoc()
    .pipe(
      map((x:Medicaments[],i:any)=>x.map((medicam:Medicaments)=> this.imageService.creatImages(medicam))))
      .subscribe(
      {
        next:(result:Medicaments[])=>{
        this.listMedoc=result
        console.log(this.listMedoc);
  
      },
      error:(err)=>{
        console.log(err);
        alert("Aucune Medicaments");
      },
    });
   }
showImagesMedoc(medicaments:Medicaments){
     console.log(medicaments);
     this.imagesDial.open(ShowImageComponent,{
      height:'500px',
      width:'800px'
     });
}

}
