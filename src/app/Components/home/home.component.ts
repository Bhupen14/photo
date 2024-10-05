import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  listImage = [];
  dirList = [];
  fileList = [];
  path = "";

;

  constructor(private data: DataService,private el:ElementRef,private renderer:Renderer2) { }



  ngOnInit() {
  
 
    this.data.getData().subscribe(
      res => {
        this.dirList = res.folder;
        this.fileList =  res.file;
        this.path = res.path;

        // this.data.sendFromHome(res.folder);
        console.log(res);
      },
      err => { console.log(err); }
    );




  }
}

//     this.data.getfromApi().subscribe(
//       res => {

//          this.myTmpData = res;
         
//       //  this.myTmpData = ;
//       for(var i =0;i<this.myTmpData.length;i++)
//       {
//         this.myLst = this.myTmpData[i].split('/');
//         this.myTmpL1.push(this.myLst); 
//       }
   
//       console.log(this.myTmpL1);
       
      
//       let myHtml = '' 
// // this.foldersList.nativeElement.innerHTML += '<ul><li>' + this.myTmpL1[0][0]+ '<ul><li>' + this.myTmpL1[0][1]+ ' </li></ul></li></ul>';

// // for(var i =0;i<5;i++)
// // {


// let step = 0;

// while(step < this.myTmpL1[0].length-1)
// {
// myHtml ="<ul>"
//   myHtml += "<li>";
//     myHtml += this.myTmpL1[0][step];
//     step ++;
//   myHtml += "<ul>"
//     myHtml += "<li>";
//       myHtml += this.myTmpL1[0][step] 
//       step++;
//         myHtml += "<ul>"
//           myHtml += "<li>"
//             myHtml += this.myTmpL1[0][step] 
//           myHtml += "</li>"
//         myHtml += "</ul>"
//       myHtml += "</li>"
//     myHtml += "</ul>"
//   myHtml += "</li>"
// myHtml += "</ul>";

// }
// this.foldersList.nativeElement.innerHTML = myHtml;  





// // ul
// //  li
// //    root D:
// //  li
// //  ul
// //    li
// //      parent /songs/
// //         ul
// //          li
// //            child
// //            ul
// //              li
// //                child1
// //              /li
// //            /ul
// //         /li
// //        /ul
// //    /li
// //  /ul
// // /ul
// // 
// //  
// // 
// // 
// //   
// // 
// // 

// // }
// // for(var i=0;i<this.myTmpL1[0].length;i++)
// // {
  

// // }
// // this.myLIst.innerHTML += '<ul><li>D:</li></ul>';
//         // this.folderObject.root=this.myTmpData[20].split("/")[0];
//         // this.folderObject.parent=this.myTmpData[20].split("/")[1]; 
        

//         // this.foldersList.nativeElement.innerHTML='';

//         //for(var i =0;i<this.myTmpData[20].split('/').length - 1;i++)
//         //{
            

//         // this.foldersList.nativeElement.innerHTML += '<ul>';
//         // this.foldersList.nativeElement.innerHTML += '<li>'+this.folderObject.root;
//         // this.foldersList.nativeElement.innerHTML += '<ul><li>' + this.folderObject.parent + '</li>';
        
//         // this.foldersList.nativeElement.innerHTML += '</ul></li>';
          
//         // this.foldersList.nativeElement.innerHTML += '</ul>';
//         //this.foldersList.nativeElement.innerHTML += '<ul><li>''</li></ul></li>'

          
          
          
//          // this.foldersList.nativeElement.innerHTML += '</ul>';

//        // }


//         //  let myl = document.getElementById("outerList");
//         //  let lst = document.createElement("li");
//         //  lst.innerText=this.myTmpData[0].split("/")[0];
//         //  myl?.appendChild(lst);
//         //  console.log(lst.innerText)


//         //  let ul = document.createElement('ul');
//         //  lst.appendChild(ul);
//         //  let lst1 = document.createElement("li");
//         //  lst1.innerText=this.myTmpData[1].split("/")[0];
//         //  ul.appendChild(lst1);
//         //  console.log(lst1.innerText)

//         //  let ul1 = document.createElement('ul');
//         //  lst1.appendChild(ul1);
//         //  let lst2 = document.createElement('li');
//         //  ul1.appendChild(lst2);


//        //let a = lst( )

//         //  console.log(this.myTmpData)

//         },
//         err => {
//           console.log(err);
//         }
//       )
//       }
//     }

    //     for (var i = 0; i < this.myTmpData.length; i++) {


    //       let ab = this.myTmpData[i].split('/').length - 1;
    //       for(var j=0;j<ab;j++)
    //        {

    //       switch (j) {
    //         case 0: if (this.myTmpL1.indexOf(this.myTmpData[i].split('/')[j]) === -1) this.myTmpL1.push(this.myTmpData[i].split('/')[j]);
    //           break;
    //         case 1: if (this.myTmpL2.indexOf(this.myTmpData[i].split('/')[j]) === -1) this.myTmpL2.push(this.myTmpData[i].split('/')[j]);
    //           break;
    //         case 2: if (this.myTmpL3.indexOf(this.myTmpData[i].split('/')[j]) === -1) this.myTmpL3.push(this.myTmpData[i].split('/')[j]);
    //           break;
    //         case 3:

    //       }
    //     }

          // for(var j=0;j<ab;j++)
          // {
          // if (this.myTmpL1.indexOf(this.myTmpData[i].split('/')[0]) === -1) this.myTmpL1.push(this.myTmpData[i].split('/')[0]);  
          //if (this.myTmpL2.indexOf(this.myTmpData[i].split('/')[1]) === -1) this.myTmpL2.push(this.myTmpData[i].split('/')[1]);
          //if (this.myTmpL3.indexOf(this.myTmpData[i].split('/')[2]) === -1) this.myTmpL3.push(this.myTmpData[i].split('/')[2]);
          // }
  //      }
        // this.myTmpL1.push(this.myTmpData[20].split('/')[0]);
        // this.myTmpL2.push(this.myTmpData[20].split('/')[1]);
        // this.myTmpL3.push(this.myTmpData[20].split('/')[2]);

        // if (this.myTmpL1.indexOf(this.myTmpData[0].split('/')[0]) === -1) this.myTmpL1.push(this.myTmpData[0].split('/')[0]);
        // if (this.myTmpL1.indexOf(this.myTmpData[1].split('/')[0]) === -1) this.myTmpL1.push(this.myTmpData[1].split('/')[0]);



        // console.log(this.myTmpL1);
        // console.log(this.myTmpL2)

        //let ab = res[20].split('/');
       // this.myTmpData = (JSON.stringify(Object.assign({},this.myTmpData)));

       // console.log(this.myTmpData);

        // var listDiv = document.createElement('Div');

         
        // var ul = document.createElement('ul');
        // listDiv?.appendChild(ul);
        // var li = document.createElement('li');
        // li.innerText = this.myTmpData[0].split('/')[0];
        // ul.appendChild(li);

        // for (var i = 0; i < 20; i++) {
        //   let item = this.myTmpData[i].split('/');
        //   for (var j = 1; j < item.length-1; j++) {
        //     // console.log(this.myTmpData[i].split('/')[j]);

        //     li = document.createElement('li');
        //     li.innerText = this.myTmpData[i].split('/')[j];
        //     ul.appendChild(li);
        //   }

        // }

        // console.log(document.getElementById('li')?.innerText)
        // 
        // myTmpData  = this.myTmpData[0].split('/');
        // let abc =  JSON.parse(myTmpL1);
        // console.log(abc);
        // let dh = scandir(this.myTmpData[0]);
        // $return = array();

        // foreach ($dh as $folder) {
        //     if ($folder != '.' && $folder != '..') {
        //         if (is_dir($dir . '/' . $folder)) {
        //             $return[] = array($folder => $this->dirtree($dir . '/' . $folder));
        //         } else {
        //             $return[] = $folder;
        //         }
        //     }
        // }
        // return $return;

        // for (var i = 0; i < this.myTmpData.length; i++) {
        //   let tmp = this.myTmpData[i].split('/')[0]
        //   if (this.myTmpL1.indexOf(tmp) === -1) {
        //     this.myTmpL1.push(tmp);
        //   }
        // }

        // for (var i = 0; i < this.myTmpData.length; i++) {
        //   let tmp2 = this.myTmpData[i].split('/')[1]
        //   if (this.myTmpL2.indexOf(tmp2) === -1) {
        //     this.myTmpL2.push(tmp2);
        //   }
        // }

        // for (var i = 0; i < this.myTmpData.length; i++) {
        //   let tmp3 = this.myTmpData[i].split('/')[2]
        //   if (this.myTmpL3.indexOf(tmp3) === -1) {
        //     this.myTmpL3.push(tmp3);
        //   }
        // }

        // console.log(this.myTmpData[20].split('/')[1])
        // console.log(res[20].split('/')[0]);





    // // working  
    // this.data.getData().subscribe(
    //   res => {
    //     // this.listImage = res;
    //     this.dirList = res.folder;
    //     this.fileList =  res.file;
    //     this.path = res.path;
    //     // console.log(res.folder);
    //   },
    //   err => { console.log(err); }
    // );





// Cdata = 
// [
//  {
//  "Country": "{\"Country\": \"Aruba\", \"circuits\": null}"
// },
// {
//  "Country": "{\"Country\": \"Ascension Island\", \"circuits\": null}"
// },
// {
//  "Country": "{\"Country\": \"Australia\", \"circuits\": [{\"Circuits_ID\": 1, \"Circuit_name\": \"Albert Park Grand Prix Circuit\"}, {\"Circuits_ID\": 29, \"Circuit_name\": \"Adelaide Street Circuit\"}]}"
// },
// {
//  "Country": "{\"Country\": \"Austria\", \"circuits\": [{\"Circuits_ID\": 23, \"Circuit_name\": \"A1-Ring\"}, {\"Circuits_ID\": 57, \"Circuit_name\": \"Zeltweg\"}, {\"Circuits_ID\": 70, \"Circuit_name\": \"Red Bull Ring\"}]}"
// },
// {
//  "Country": "{\"Country\": \"Azerbaijan\", \"circuits\": [{\"Circuits_ID\": 73, \"Circuit_name\": \"Baku City Circuit\"}]}"
// },
// {
//  "Country": "{\"Country\": \"Bahamas\", \"circuits\": null}"
// },
// ];
// outerList =document.getElementById("outerList");

  
    // this.outerList =document.getElementById("outerList");


    // this.Cdata.forEach(country => {
    //   // parse the JSON string into an object
    //   let countryData = JSON.parse(country.Country);
    //   let countryEntry = document.createElement("li");
    //   countryEntry.textContent = countryData.Country;
    //  this.outerList!.appendChild(countryEntry);
      
    //   // create circuit list if it is non-null
    //   if (countryData.circuits != null) {
    //     let innerList = document.createElement("ul");
    //     this.outerList!.appendChild(innerList);
    //     countryData.circuits.forEach((circuit: { Circuit_name: string | null; }) => {
    //       let circuitEntry = document.createElement("li");
    //       circuitEntry.textContent = circuit.Circuit_name;
    //       innerList.appendChild(circuitEntry);
    //     });
    //   }
    // });