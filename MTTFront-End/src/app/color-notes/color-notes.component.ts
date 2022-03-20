import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Frame } from '../frameInterface';
import { selectedNotes } from '../selectedNotesInterface';

//TODO: change name to preGenetatingTabelInput

@Component({
  selector: 'preGenetatingTabelInput',
  templateUrl: './color-notes.component.html',
  styleUrls: ['./color-notes.component.css']
})

export class ColorNotesComponent {
  @Output() formValue = new EventEmitter();
  selectedFrame: string = "";
  @Input() frames: Array<Frame> = []
  selectedNotes: selectedNotes = {
    frameName: "",
    distance: 300,
    colorsName: {}
  }

  submit(form: any) {
    this.formValue.emit(this.selectedNotes);
  }

  addToTheDict(color: string) {
    if (color in this.selectedNotes.colorsName) {
      return true;
    }

    this.selectedNotes.colorsName[color] = "";
    console.log(this.selectedNotes.colorsName[color])
    return true;
  }

  cleanDict() {
    this.selectedNotes.colorsName = {}
  }
}