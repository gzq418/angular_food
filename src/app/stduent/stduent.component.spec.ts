import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StduentComponent } from './stduent.component';

describe('StduentComponent', () => {
  let component: StduentComponent;
  let fixture: ComponentFixture<StduentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StduentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StduentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
