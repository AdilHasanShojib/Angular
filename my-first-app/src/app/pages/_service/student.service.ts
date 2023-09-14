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


  getStudents():Observable<Student[]>{

  return this.http.get<Student[]>(this.studentsURL).pipe(
    tap((_)=> console.log('Fetch all students')),
    catchError(this.handleError<Student[]>('getStudents',[]))

  )
  }

  getStudentsByID(id:number):Observable<Student>{
    const url= `${this.studentsURL}?id=${id}`; 
    return this.http.get<Student>(url).pipe(
      tap((_)=> console.log(`Fetched Students by ${id}`)),
      catchError(this.handleError<Student>(`getStudents by ${id}`))
  
    )
    }


  saveStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.studentsURL,student,this.httpOptions).pipe(
      tap((newStudent:Student)=> console.log(`Add new Student ${newStudent.id}`)),
      catchError(this.handleError<Student>(`Save student`))
  
    )


  }



  removeStudentsByID(id:number):Observable<Student>{
    const url= `${this.studentsURL}/${id}`; 
    return this.http.delete<Student>(url).pipe(
      tap((_)=> console.log(`Delete Students by ${id}`)),
      catchError(this.handleError<Student>(`Delete Student by ${id}`))
  
    )
    }


  
   private handleError<T>(operation ='operation',result?: T){

   return (error:any): Observable<T> => {
   console.error(error);
   console.log(`${operation} failed: ${error.message}`);
   return of(result as T);
   }



  }

  updateStudent(student:Student):Observable<Student>{
   
    return this.http.put<Student>(this.studentsURL,student,this.httpOptions).pipe(
      tap((_)=> console.log(`Update Students `)),
      catchError(this.handleError<Student>(`Update Student `))
  
    )
    }

    searchStudents(terms:string): Observable<Student[]>{
      if(!terms.trim()) return of([]);
      return this.http.get<Student[]>(`${this.studentsURL}?name=${terms}`).pipe(
        tap((_)=> console.log('Fetch all students')),
        catchError(this.handleError<Student[]>('getStudents',[]))
    
      )
      }






}
