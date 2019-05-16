import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2FooterItemComponent } from './demo2-footer-item.component';

describe('Demo2FooterItemComponent', () => {
  let component: Demo2FooterItemComponent;
  let fixture: ComponentFixture<Demo2FooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2FooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2FooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
