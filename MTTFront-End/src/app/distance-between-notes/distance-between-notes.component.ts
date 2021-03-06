import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'distance-between-notes',
  templateUrl: './distance-between-notes.component.html',
  styleUrls: ['./distance-between-notes.component.css']
})
export class DistanceBetweenNotesComponent {

  @Input() token: string = "";
  @Input() board:string = "";
  @Input() frames: Array<string> = [];
  @Input() APILink!:string;
  selectedFrame: string = "";
  result: number | undefined;

  constructor(private http:HttpClient) {

  }

  submit(form: any) {
    const params = new HttpParams()
    .set('note1', form.value.noteA)
    .set('note2', form.value.noteB)
    .set('token', this.token)
    .set('board', this.board);

    this.http.get<number>(this.APILink + '/distance-between-notes/' + this.selectedFrame + '/', {params}).subscribe(response =>{
      this.result = Math.round(response);
    });

  }
}
