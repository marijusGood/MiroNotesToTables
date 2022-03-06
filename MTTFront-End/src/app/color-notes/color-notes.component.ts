import { Component, EventEmitter, OnInit, Output } from '@angular/core';

//TODO: change name to preGenetatingTabelInput

@Component({
  selector: 'preGenetatingTabelInput',
  templateUrl: './color-notes.component.html',
  styleUrls: ['./color-notes.component.css']
})

export class ColorNotesComponent {
  @Output() formValue = new EventEmitter();
  listInput: string[] = ["a","a","a","a","a","a","a","a"];

  listOfColors = [
    "#f5d128",
    "#fff9b1",
    "#93d275",
    "#6cd8fa",
    "#7b92ff"
  ];

  listOfFrames = ["Frame 1", "Frame 2"];

  

  submit(form: any) {
    this.formValue.emit(form.value);
  }


}
