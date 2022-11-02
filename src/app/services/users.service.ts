import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient,private userAuth:UserAuthService) { }

  requestHeader=new HttpHeaders(
    {"No-Auth":"True",}
   );
    
headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');
    public login(user:any) :Observable<any>{
    return this.httpclient.post<any>(environment.hostUrl +'login',user,{ 'headers': this.headers })
    }
  
    public register(user:any) :Observable<any>{
      return this.httpclient.post<any>(environment.hostUrl +'register',user,{ 'headers': this.headers })
      }
    // public roleMatch(allowRoles:any):boolean {
    //     let isMatch =false;
    //     const userRoles:any = this.userAuth.getRoles();
    //     if(userRoles !=null && userRoles){
    //       for(let i=0;i<userRoles.length;i++){
    //           for(let j=0;j<userRoles.length;j++){
    //             if(userRoles[i].name === allowRoles[j]){
    //               isMatch =true;
    //               return isMatch;
    //             }else{
    //               return isMatch;
    //             }
    //           }
    //       }
    //     }

    // }

}
