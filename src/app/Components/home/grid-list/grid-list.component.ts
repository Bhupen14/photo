import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {

  // @Input() data =[];// : string[];
  @Input() ListOfFile = [];
  @Input() path = "";
constructor(){}
ngOnInit(){
  

}

}
