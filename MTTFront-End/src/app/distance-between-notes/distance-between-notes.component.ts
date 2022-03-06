import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'distance-between-notes',
  templateUrl: './distance-between-notes.component.html',
  styleUrls: ['./distance-between-notes.component.css']
})
export class DistanceBetweenNotesComponent {
  @Output() formValue = new EventEmitter();

  submit(form: any) {
    this.formValue.emit(form.value);
  }
}
