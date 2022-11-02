import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inscription-pharma',
  templateUrl: './inscription-pharma.component.html',
  styleUrls: ['./inscription-pharma.component.css']
})
export class InscriptionPharmaComponent implements OnInit {
  users=new User();
  formu = {
    prenom: '',
    nom:'',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }


registe(){
    this.userService.register(this.formu).subscribe(
      {
        next:(response)=>{
              console.log(response);
              console.log(JSON.stringify(this.users, null, 2));
        }
        ,error:(err)=>{
          console.error(err);
        },
      });
    console.log(JSON.stringify(this.formu, null, 2));
  }
 
}
