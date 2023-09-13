import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  private studentsURL= 'api/students';
  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http:HttpClient ) { }


  getstudents():Observable<Student[]>{

  return this.http.get<Student[]>(this.studentsURL).pipe(
    tap((_)=> console.log('Fetch all students')),
    catchError(this.handleError<Student[]>('getstudents',[]))

  )
  }
  
   private handleError<T>(operation ='operation',result?: T){

   return (error:any): Observable<T> => {
   console.error(error);
   console.log(`${operation} failed: ${error.message}`);
   return of(result as T);
   }



  }


  






}
