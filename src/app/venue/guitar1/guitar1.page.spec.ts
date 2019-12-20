import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitar1Page } from './guitar1.page';

describe('Guitar1Page', () => {
  let component: Guitar1Page;
  let fixture: ComponentFixture<Guitar1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guitar1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guitar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
