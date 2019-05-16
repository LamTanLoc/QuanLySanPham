import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2CarouselComponent } from './demo2-carousel.component';

describe('Demo2CarouselComponent', () => {
  let component: Demo2CarouselComponent;
  let fixture: ComponentFixture<Demo2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
