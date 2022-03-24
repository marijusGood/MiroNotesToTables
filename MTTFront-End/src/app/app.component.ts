import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Frame } from './frameInterface';
import { RowData, TableOfRows } from './rowDataInterface';
import { selectedNotes } from './selectedNotesInterface';
import { tableContent } from './tableContentInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  APILink: string = "http://127.0.0.1:8000";
  board: string = "";
  token: string = "";
  frames: Array<Frame> = [];
  frameList: Array<string> = [];
  tables: Array<TableOfRows> = [];
  hideHTMLText: boolean = true;

  
  constructor(private http:HttpClient) {

  }

  miroFormInfo(formValue: any) {
    this.token = formValue.token;
    this.board = formValue.board;

    const params = new HttpParams()
    .set('token', this.token)
    .set('board', this.board);

    this.http.get<Array<Frame>>(this.APILink + '/frames/', {params}).subscribe(response =>{

      this.frames = response;
      this.frames.forEach(frame => {
        this.frameList.push(frame.FrameName);
      });

    });
    
  }

  selcetedNotes(formValue: selectedNotes) {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const params = new HttpParams()
    .set('token', this.token)
    .set('board', this.board);

    this.http.post<Array<tableContent>>(this.APILink + '/table/',
                                        JSON.stringify(formValue),
                                        {headers: headers, params: params})
     .subscribe(response =>{
      this.tables = [];

      for (let i = 0; i < response.length; i++) {
        if (response[i].tableName == "") continue
        let tableOfRows: TableOfRows = {
          TableName: response[i].tableName,
          Rows: []
        };
        for (let j = 0; j < response[i].groupedNoteText.length; j++) {

          let rowData: RowData = {
            Priority: 0,
            Summary: ""
          };

          for (let k = 0; k < response[i].groupedNoteText[j].length; k++) {

            rowData.Summary += response[i].groupedNoteText[j][k];
            if (k < response[i].groupedNoteText[j].length - 1) rowData.Summary += '\n'
          }
          tableOfRows.Rows.push(rowData);
        }
        this.tables.push(tableOfRows);
      }

    });
  }

  updateTableContent(formValue: TableOfRows, table: TableOfRows) {
    table = formValue;
  }
}
