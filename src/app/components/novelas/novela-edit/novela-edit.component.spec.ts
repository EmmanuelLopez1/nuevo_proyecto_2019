import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelaEditComponent } from './novela-edit.component';

describe('NovelaEditComponent', () => {
  let component: NovelaEditComponent;
  let fixture: ComponentFixture<NovelaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
