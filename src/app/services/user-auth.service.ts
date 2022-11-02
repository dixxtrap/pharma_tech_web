import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
       localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles(): []{
   return JSON.parse(JSON.stringify(localStorage.getItem('roles')));
  }
  public setToken(accessToken:string){
        localStorage.setItem('accessToken',accessToken);
  }

  public getToken():string{
      return JSON.parse(JSON.stringify(localStorage.getItem("accessToken")));
    }

    public clear(){
      localStorage.clear();
    }

    public isLoggedIn(){
      return this.getRoles() && this.getToken();
    }

}
