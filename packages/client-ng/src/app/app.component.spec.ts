/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
