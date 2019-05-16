import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2ItemComponent } from './demo2-item.component';

describe('Demo2ItemComponent', () => {
  let component: Demo2ItemComponent;
  let fixture: ComponentFixture<Demo2ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
