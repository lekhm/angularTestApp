/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnternehmenseinheitenListeComponent } from './unternehmenseinheiten-liste.component';

describe('UnternehmenseinheitenListeComponent', () => {
  let component: UnternehmenseinheitenListeComponent;
  let fixture: ComponentFixture<UnternehmenseinheitenListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnternehmenseinheitenListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnternehmenseinheitenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
