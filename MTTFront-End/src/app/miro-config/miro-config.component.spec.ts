import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiroConfigComponent } from './miro-config.component';

describe('MiroConfigComponent', () => {
  let component: MiroConfigComponent;
  let fixture: ComponentFixture<MiroConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiroConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiroConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
