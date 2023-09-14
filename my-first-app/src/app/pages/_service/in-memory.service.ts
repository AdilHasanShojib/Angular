import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  
  createDb( ) {
    
    const students : Student [] =[


      {id:1,name:"adil",description:'Sojib is a good boy'},
      {id:2,name:"Sani",description:'Sunny is a innocent boy'},
      {id:3,name:"Tisha",description:'Tisha is a Lovely girl'}
    
    
    
    ];
        return {students}
  }

  genId(students: Student [] ): number {
   return students.length > 0 ? Math.max(...students.map((x)=>x.id))+1
   :11;

  }




}
