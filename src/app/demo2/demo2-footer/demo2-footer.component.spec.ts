import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2FooterComponent } from './demo2-footer.component';

describe('Demo2FooterComponent', () => {
  let component: Demo2FooterComponent;
  let fixture: ComponentFixture<Demo2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
