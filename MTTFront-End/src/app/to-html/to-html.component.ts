import { Component, Input, OnInit } from '@angular/core';
import { TableOfRows } from '../rowDataInterface';
import { HTMLCodeCreator } from './HTMLCodeCreator';

@Component({
  selector: 'to-html',
  templateUrl: './to-html.component.html'
})
export class ToHTMLComponent {
  @Input()
  tables!: Array<TableOfRows>;
  HTMLTXT: string = "";

  generateHTMLCode() {
    this.HTMLTXT = "";
    let generator = new HTMLCodeCreator();
    for (let i = 0; i < this.tables.length; i++) {
      this.HTMLTXT += generator.generateHTMLCode(this.tables[i])
    }
  }
}
