/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontaktUpitComponent } from './kontakt-upit.component';

describe('KontaktUpitComponent', () => {
  let component: KontaktUpitComponent;
  let fixture: ComponentFixture<KontaktUpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktUpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktUpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
