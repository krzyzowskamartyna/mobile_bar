import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsPage } from './coctails.page';

describe('CoctailsPage', () => {
  let component: CoctailsPage;
  let fixture: ComponentFixture<CoctailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
