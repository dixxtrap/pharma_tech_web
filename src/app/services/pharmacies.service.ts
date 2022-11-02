import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacie } from '../models/pharmacie';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  constructor(private http:HttpClient) { }

  
 public  getAllPharmacies(): Observable<Pharmacie[]> {

  return this.http.get<Pharmacie[]>(environment.hostUrl+'pharmacies');
}
}
