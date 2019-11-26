import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
 
  baseUrl:string = 'https://developer-service-overspeedy-celebratedness.cfapps.io'
  devs: Developer[];
  constructor(private httpClient:HttpClient) {
    
  }
  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

   addDeveloper(dev: Developer) {
    return this.httpClient.post<Developer>(
      this.baseUrl+'/developer',
      dev,
      this.postHeaders
    ).subscribe(
      response=>console.log(response),
      (error:any)=>this.handleError(error)
    );
  }
  getAllDevelopers(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>(this.baseUrl+'/developers').pipe(
      map(response => {
        this.devs = response
        return response
      }),
      catchError(this.handleError<any>())
    )
  }

  private handleError<T>(result?:T){
    return(error:any):Observable<T> =>{
      console.log('An error occured' + error);
      return null;
    }
  }

  getDeveloperById(devId: number) {
    return this.devs.find(dev=>dev.id==devId);
  }

}
