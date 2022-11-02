import { formatDate } from '@angular/common';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle.model';
import { Medicaments } from '../models/medicaments';
import { Pharmacie } from '../models/pharmacie';
import { MedicamentsService } from '../services/medicaments.service';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-add-m',
  templateUrl: './add-m.component.html',
  styleUrls: ['./add-m.component.css']
})
export class AddMComponent implements OnInit {
  medoc:Medicaments={
    idMedic:0,
    nomMedica:"",
    dateCreationMedoc:new Date,
    medocImage:[],
    pharmacie:[]
  };
  meds?:Medicaments[];
  lispharmacie?: Pharmacie[];
  id: any;
  pa?:Pharmacie;
  constructor(private medicamentsservice: MedicamentsService, private sanitizer: DomSanitizer,private pharmacieervice:PharmaciesService) { }
  ngOnInit(): void {
    this.getAll();
  }
  idp:any
  selected = "----"
  update(e:any){
    this.selected = e.target.value
  }
  getAll(){
    this.pharmacieervice.getAllPharmacies().subscribe(
      pat=>{
        this.lispharmacie=pat
        console.log(this.lispharmacie);
      });
   }

  addMedicaments(medocform: NgForm) {
   
    const medicamentsFormData=this.prepareFormData(this.medoc);

    console.log(medicamentsFormData);
    this.medicamentsservice.createMedicaments(medicamentsFormData).subscribe(
      {
        next:(response)=> {
          console.log(response);
        medocform.reset();     
       },
      error:(err)=>{
        console.error(err);
      },
    }
    )
  }

  //Permet d'envoyer le medicaments avec l'image correspondant
  prepareFormData(med:Medicaments):FormData{
    const formData=new FormData();
    //  formData.append(
    //   'pharmacie',
    //   this.medoc.pharmacie=JSON.parse(JSON.stringify(this.idp),
    //   ));
    formData.append(
      'medicaments',
      new Blob([JSON.stringify(med)],{type:'application/json'})
    );
    for(var i=0;i<med.medocImage.length;i++){
      formData.append(
        'imageFile',
        med.medocImage[i].file,
        med.medocImage[i].file.name
      );
    }
    console.log(this.medoc.pharmacie);
    console.log(formData);
    return formData;
  }
  //Méthode pour le téléchargement d'image dans l'ordinateur
  onFileSelected(event:any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const filehandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.medoc?.medocImage?.push(filehandle);
      console.log(filehandle);
      console.log(this.medoc?.medocImage);
    }
  }
  removeImages(i:number){
    this.medoc?.medocImage?.splice(i,1);
  }

}
