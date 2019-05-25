import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderCardsComponent } from './gender-cards.component';

describe('GenderCardsComponent', () => {
  let component: GenderCardsComponent;
  let fixture: ComponentFixture<GenderCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
