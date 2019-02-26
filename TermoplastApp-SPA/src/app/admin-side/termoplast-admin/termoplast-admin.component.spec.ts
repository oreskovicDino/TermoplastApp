/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermoplastAdminComponent } from './termoplast-admin.component';

describe('TermoplastAdminComponent', () => {
  let component: TermoplastAdminComponent;
  let fixture: ComponentFixture<TermoplastAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoplastAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoplastAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
