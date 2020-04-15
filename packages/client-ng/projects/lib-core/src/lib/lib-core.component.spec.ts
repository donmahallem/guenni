/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCoreComponent } from './lib-core.component';

describe('LibCoreComponent', (): void => {
  let component: LibCoreComponent;
  let fixture: ComponentFixture<LibCoreComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [LibCoreComponent],
    })
      .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(LibCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
