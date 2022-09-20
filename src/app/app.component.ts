import { Component, OnInit } from '@angular/core';
import GermedicaFieldJson from './../../to-render.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  GerimedicaJsonData = []
  ngOnInit() {
    this.GerimedicaJsonData = GermedicaFieldJson
  }
  getNumber(a: Number) {
    return a
  }
}
