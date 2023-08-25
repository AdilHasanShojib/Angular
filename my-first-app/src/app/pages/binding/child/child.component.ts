import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() villain:any;
 @Input()  heroName:any;


 @Output() killVillain= new EventEmitter<any>();

onKillVillain(event: any){


this.killVillain.emit("sajib killed 1st villain")

}


}
