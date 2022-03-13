import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfTables = ["IT", "EDaaS"];

  tableContent: any = [
    [{
      Priority: 0,
      Summary: "d",
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
    }],
    [{
      Priority: 0,
      Summary: "d",
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
    }]
  ];
  
  constructor(private http:HttpClient) {
    const params = new HttpParams()
    .set('token', 'f6iLyJ-Y4Qeef9YEq6tmEMoouR4')
    .set('board', 'uXjVON1TP3E=');

    http.get('http://127.0.0.1:8000/frames/', {params}).subscribe(response =>{
      console.log(response);
    });
  }

  miroFormInfo(formValue: any) {
    console.log(formValue)
  }

  distanceBetweenNotesInfo(formValue: any) {
    console.log(formValue)
  }

  preGenetatingTabelInfo(formValue: any) {
    console.log(formValue)
  }
}
