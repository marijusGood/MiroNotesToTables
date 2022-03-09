import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generatedTable',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent {
  @Input() tableName: string = "IT";
  @Input() tableContent: RowDataList = [
    {
      Priority: 0,
      Summary: "d\ndasd",
      DesiredState: "w",
      ActionsEngX: "k",
      ActionsEngineers: "f"
    },
    {
      Priority: 1,
      Summary: "dd",
      DesiredState: "ww",
      ActionsEngX: "kk",
      ActionsEngineers: "ff"
    }
  ];

  sortArray() {
    var myClonedArray: RowDataList = [];
    this.tableContent.forEach(val => myClonedArray.push(Object.assign({}, val)));
    myClonedArray.sort((a, b) => b.Priority - a.Priority);
    this.tableContent = myClonedArray;
  }
  

}

interface RowData {
  Priority: number;
  Summary: string;
  DesiredState?: string;
  ActionsEngX?: string;
  ActionsEngineers?: string;
}

interface RowDataList extends Array<RowData>{}