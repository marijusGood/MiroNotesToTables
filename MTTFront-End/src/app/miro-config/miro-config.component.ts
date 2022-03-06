import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'miro-config',
  templateUrl: './miro-config.component.html',
  styleUrls: ['./miro-config.component.css']
})
export class MiroConfigComponent {
  @Output() formValue = new EventEmitter();

  submit(form: any) {
    this.formValue.emit(form.value);
  }
}
