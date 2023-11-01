import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from 'canvasjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-chart';
  public chart: any;

  ngOnInit(): void {
  }

  
}
