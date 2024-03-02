/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Seccionprincipal1Component } from './seccionprincipal1.component';

describe('Seccionprincipal1Component', () => {
  let component: Seccionprincipal1Component;
  let fixture: ComponentFixture<Seccionprincipal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccionprincipal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccionprincipal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
