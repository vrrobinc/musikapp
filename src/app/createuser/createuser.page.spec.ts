import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserPage } from './createuser.page';

describe('CreateuserPage', () => {
  let component: CreateuserPage;
  let fixture: ComponentFixture<CreateuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
