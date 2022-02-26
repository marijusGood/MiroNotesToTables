import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNotesComponent } from './color-notes.component';

describe('ColorNotesComponent', () => {
  let component: ColorNotesComponent;
  let fixture: ComponentFixture<ColorNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
