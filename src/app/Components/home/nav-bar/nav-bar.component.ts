import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { DataService } from 'src/app/Service/data.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


listOfDir:string = "" ;
@Input() ListOfDir = [];
browsingPath = "D:";
pathButton = false;
cPath = {"Path":""};

constructor(private data:DataService,private el:ElementRef,private renderer:Renderer2){
//  this.data.getFolderData.subscribe(msg => this.listOfDir = msg);
}



ngOnInit() {

  this.data.getFolderData.subscribe(msg => this.listOfDir = msg);
  // console.log(this.listOfDir);


}


lookFolder(myFolder:any)
{
  console.log(myFolder);
}

select(event:any)
{
  this.browsingPath = this.browsingPath+"/"+event;
  this.pathButton=true;
  this.cPath.Path = this.browsingPath;
  this.data.sendFolder(this.cPath).subscribe (
    res => {

    },
    err =>
    {

    }
  )
  // console.log(event);
}


prv()
{
  this.pathButton=true;

  let newPath = this.browsingPath.split('/');
  newPath.pop();
  this.browsingPath = newPath.join("/");
  console.log(this.browsingPath.split("/").length)
  if(this.browsingPath.split("/").length <= 1){this.pathButton=false;}
}
}



