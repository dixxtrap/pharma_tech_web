import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicaments } from '../models/medicaments';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {
  constructor(private httpclient:HttpClient) { 
  }
// Error handling
handleError(error: any){
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
  rechercheMedoc(nomMedoc:any): Observable<Medicaments> {
    return this.httpclient.get<Medicaments>(environment.hostUrl +'rechercheNomMedic/'+nomMedoc)
      .pipe(
        catchError(this.handleError)
      );
    }
  

    public createMedicaments(medicaments:FormData){
      return this.httpclient.post<Medicaments>(environment.hostUrl+'saveMedoc',medicaments);
        }

        public  getAllMedoc(): Observable<Medicaments[]> {

          return this.httpclient.get<Medicaments[]>(environment.hostUrl+'allMedoc');
        }
}
