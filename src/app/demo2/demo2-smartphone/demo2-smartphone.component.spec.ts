import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2SmartphoneComponent } from './demo2-smartphone.component';

describe('Demo2SmartphoneComponent', () => {
  let component: Demo2SmartphoneComponent;
  let fixture: ComponentFixture<Demo2SmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2SmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2SmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
