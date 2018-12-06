import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStyleComponent } from './github-style.component';

describe('GithubStyleComponent', () => {
  let component: GithubStyleComponent;
  let fixture: ComponentFixture<GithubStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
