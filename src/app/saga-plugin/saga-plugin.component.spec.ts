import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaPluginComponent } from './saga-plugin.component';

describe('SagaPluginComponent', () => {
  let component: SagaPluginComponent;
  let fixture: ComponentFixture<SagaPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagaPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagaPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
