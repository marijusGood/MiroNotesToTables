import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHTMLComponent } from './to-html.component';

describe('ToHTMLComponent', () => {
  let component: ToHTMLComponent;
  let fixture: ComponentFixture<ToHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToHTMLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
