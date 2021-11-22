/*
 * Package @guenni/client-ng
 * Source https://donmahallem.github.io/guenni/
 */

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
    beforeEach(
        waitForAsync((): void => {
            void TestBed.configureTestingModule({
                declarations: [AppComponent],
                imports: [RouterTestingModule],
            }).compileComponents();
        })
    );

    it('should create the app', (): void => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        const app: AppComponent = fixture.debugElement.componentInstance as AppComponent;
        void expect(app).toBeTruthy();
    });
});
