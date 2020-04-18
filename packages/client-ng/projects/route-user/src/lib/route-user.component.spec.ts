/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUserComponent } from './route-user.component';

describe('RouteUserComponent', (): void => {
  let component: RouteUserComponent;
  let fixture: ComponentFixture<RouteUserComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [RouteUserComponent],
    })
      .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(RouteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
