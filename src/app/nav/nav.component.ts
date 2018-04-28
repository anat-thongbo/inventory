import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
themecolor:string='';
// @Output() setcolor = new EventEmitter();
  constructor() { 
 this.setcolor();
    }
    setcolor(){
      if(!localStorage.getItem('color')){
        localStorage.setItem('color','themecolor1');
        this.themecolor = localStorage.getItem('color');
      }else{
        this.themecolor = localStorage.getItem('color');
      }
    }
    
  ngOnInit() {
  }
  setcolor1(){
    localStorage.setItem('color','themecolor1');
    // this.themecolor = localStorage.getItem('color');
    window.location.reload();
  }
  setcolor2(){
    localStorage.setItem('color','themecolor2');
    // this.themecolor = localStorage.getItem('color');
    window.location.reload();
  }
  setcolor3(){
    localStorage.setItem('color','themecolor3');
    // this.themecolor = localStorage.getItem('color');
    window.location.reload();
  }
  setcolor4(){
    localStorage.setItem('color','themecolor4');
    // this.themecolor = localStorage.getItem('color');
    window.location.reload();
  }
  setcolor5(){
    localStorage.setItem('color','themecolor5');
    // this.themecolor = localStorage.getItem('color');
    window.location.reload();
  }

}
