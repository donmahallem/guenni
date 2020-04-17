import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNgCoreComponent } from './client-ng-core.component';

describe('ClientNgCoreComponent', () => {
  let component: ClientNgCoreComponent;
  let fixture: ComponentFixture<ClientNgCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNgCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNgCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
