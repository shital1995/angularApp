import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private _http:HttpClient) { }
  register(data){
   return  this._http.post('http://www.angularservices.com/register.php',data).pipe(map((res)=>{
      return res;
    }));
  }
}

