import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTestComponent } from './zone-test.component';

describe('ZoneTestComponent', () => {
  let component: ZoneTestComponent;
  let fixture: ComponentFixture<ZoneTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
