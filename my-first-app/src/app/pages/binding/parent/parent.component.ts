import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

hero = 'Mr. Shojib';
sajibkills='';
villains=[{id:1 , name:"Sunny" }];

  

 sajibKill(event: any){

   console.log(event);
   this.sajibkills=event;
 }

}
