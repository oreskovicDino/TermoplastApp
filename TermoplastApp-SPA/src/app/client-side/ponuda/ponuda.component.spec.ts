/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PonudaComponent } from './ponuda.component';

describe('PonudaComponent', () => {
  let component: PonudaComponent;
  let fixture: ComponentFixture<PonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
