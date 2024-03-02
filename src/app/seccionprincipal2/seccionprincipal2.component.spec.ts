/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Seccionprincipal2Component } from './seccionprincipal2.component';

describe('Seccionprincipal2Component', () => {
  let component: Seccionprincipal2Component;
  let fixture: ComponentFixture<Seccionprincipal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccionprincipal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccionprincipal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
