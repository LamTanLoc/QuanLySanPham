import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2HeaderComponent } from './demo2-header.component';

describe('Demo2HeaderComponent', () => {
  let component: Demo2HeaderComponent;
  let fixture: ComponentFixture<Demo2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
