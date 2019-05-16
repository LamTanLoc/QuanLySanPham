import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2LaptopComponent } from './demo2-laptop.component';

describe('Demo2LaptopComponent', () => {
  let component: Demo2LaptopComponent;
  let fixture: ComponentFixture<Demo2LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
