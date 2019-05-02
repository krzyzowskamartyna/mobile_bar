import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourPage } from './flavour.page';

describe('FlavourPage', () => {
  let component: FlavourPage;
  let fixture: ComponentFixture<FlavourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
