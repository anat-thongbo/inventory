import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  themecolor:string='';

  ngOnInit(){
    this.themecolor = localStorage.getItem('color');
  }

  
}
