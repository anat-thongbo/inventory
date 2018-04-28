import { Component, OnInit, Input, OnChanges} from '@angular/core';


@Component({
  selector: 'app-menubar', 
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit , OnChanges  {
  themecolor:string='';
  constructor() {
  }
  ngOnChanges(){
    
  }
 ngOnInit() {
  if(window.matchMedia("screen and (max-width: 990px)").matches){
    document.getElementById('hidden').style.display = "none";
    document.getElementById('btn-hidden').style.display = "block";
   }
   this.themecolor = localStorage.getItem('color');
  }
  ShowHidden() {
    var x = document.getElementById('hidden');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        
    }
}

}
