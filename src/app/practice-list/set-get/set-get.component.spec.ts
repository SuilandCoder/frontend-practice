import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGetComponent } from './set-get.component';

describe('SetGetComponent', () => {
  let component: SetGetComponent;
  let fixture: ComponentFixture<SetGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
