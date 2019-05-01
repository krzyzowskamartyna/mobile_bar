import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholPage } from './non-alcohol.page';

describe('NonAlcoholPage', () => {
  let component: NonAlcoholPage;
  let fixture: ComponentFixture<NonAlcoholPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcoholPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAlcoholPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
