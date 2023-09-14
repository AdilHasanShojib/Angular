import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  
  createDb( ) {
    
    const Students : Student [] =[


      {id:1,name:"adil"},
      {id:2,name:"Sani"},
      {id:3,name:"Tisha"}
    
    
    
    ];
        return {Students}
  }

  genId(Students: Student [] ): number {
   return Students.length > 0 ? Math.max(...Students.map((x)=>x.id))+1
   :11;

  }




}
