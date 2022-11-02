import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
     roles:[],
  };
  public loginForm?: FormGroup;
  userName?:string  | null;
  password?:string;
  userRoles?:string | null;
  constructor(private userService:UsersService, private fb: FormBuilder,
    private router:Router,private userAuth:UserAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.userName = sessionStorage.getItem("username") ;
      this.userRoles = sessionStorage.getItem("roles");
      console.log(this.userName!= null,this.userRoles!=null);
  }
//Connexion
onSubmit():void{
  this.userService.login(this.user).subscribe(
    {
      next:(response:any)=>{
            console.log(response);
            console.log(response.accessToken);
            console.log(response.roles);
            console.log(JSON.stringify(this.user, null, 2));
            this.userAuth.setRoles(response.roles);
            this.userAuth.setToken(response.accessToken);
            const role =response.roles[0].name;
            if(role === 'ROLE_USER'){
                 this.router.navigate((['/home'])); 
            }
            else
            {
              this.router.navigate((['/home/medicaments']));
            }
      }
      ,error:(err)=>{
        console.error(err);
      },
    });
}
}
