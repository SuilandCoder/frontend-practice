import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGetChildComponent } from './set-get-child.component';

describe('SetGetChildComponent', () => {
  let component: SetGetChildComponent;
  let fixture: ComponentFixture<SetGetChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGetChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
