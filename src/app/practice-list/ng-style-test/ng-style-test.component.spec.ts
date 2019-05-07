import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleTestComponent } from './ng-style-test.component';

describe('NgStyleTestComponent', () => {
  let component: NgStyleTestComponent;
  let fixture: ComponentFixture<NgStyleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
