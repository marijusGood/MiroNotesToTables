import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
