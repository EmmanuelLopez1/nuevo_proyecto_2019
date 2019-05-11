import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelasComponent } from './novelas.component';

describe('NovelasComponent', () => {
  let component: NovelasComponent;
  let fixture: ComponentFixture<NovelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
