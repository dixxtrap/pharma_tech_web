import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {       
        let modifiedReq = req
        if (sessionStorage.getItem('username') && sessionStorage.getItem('access_token')) {
            console.log('With Token --- ' + sessionStorage.getItem('access_token'));
            modifiedReq = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('access_token')
                  }
            });
        }
        return next.handle(modifiedReq);
    }
}