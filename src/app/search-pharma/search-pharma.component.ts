import { Component, OnInit } from '@angular/core';
import { Medicaments } from '../models/medicaments';
import { MedicamentsService } from '../services/medicaments.service';

@Component({
  selector: 'app-search-pharma',
  templateUrl: './search-pharma.component.html',
  styleUrls: ['./search-pharma.component.css']
})
export class SearchPharmaComponent implements OnInit {
  nomMedica?:string;
  message?:any=[];
  constructor(private medicamantsservice:MedicamentsService) { }

  ngOnInit(): void {
  }


 public findMedicamentsbypharm(){
      this.medicamantsservice.rechercheMedoc(this.nomMedica).subscribe(
        {
          next:(response)=>{
                console.log(response);
               // this.message=response;
            this.message.push(response);
             console.log(this.message);

          }
          ,error:(err)=>{
            console.error(err);
            alert("Aucune Medicaments");
          },
        }
      );
  }
}
