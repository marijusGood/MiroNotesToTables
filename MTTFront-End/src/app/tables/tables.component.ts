import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RowData, TableOfRows } from '../rowDataInterface';
import { tableContent } from '../tableContentInterface';

@Component({
  selector: 'generatedTable',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent {
  @Input()
  table!: TableOfRows;
  @Output() formValue = new EventEmitter();

  sortArray() {
    var myClonedArray: Array<RowData> = [];
    this.table.Rows.forEach(val => myClonedArray.push(Object.assign({}, val)));
    myClonedArray.sort((a, b) => b.Priority - a.Priority);
    this.table.Rows = myClonedArray;
    this.formValue.emit(this.table);
  }

  sendUpdate() {
    this.formValue.emit(this.table);
  }
}