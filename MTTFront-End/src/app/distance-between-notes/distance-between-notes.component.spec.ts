import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceBetweenNotesComponent } from './distance-between-notes.component';

describe('DistanceBetweenNotesComponent', () => {
  let component: DistanceBetweenNotesComponent;
  let fixture: ComponentFixture<DistanceBetweenNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceBetweenNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceBetweenNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
