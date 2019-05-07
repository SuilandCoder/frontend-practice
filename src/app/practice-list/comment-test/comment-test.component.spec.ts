import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTestComponent } from './comment-test.component';

describe('CommentTestComponent', () => {
  let component: CommentTestComponent;
  let fixture: ComponentFixture<CommentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
