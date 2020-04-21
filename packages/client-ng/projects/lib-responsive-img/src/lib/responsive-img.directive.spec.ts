/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveImgDirective } from './responsive-img.directive';
import { Component } from '@angular/core';
import { guennitypes } from '@guenni/types';
import { By } from '@angular/platform-browser';
@Component({
  template: '<img gRespimgImg [image]="image"/>',
})
class TestParentComponent {
  public image: guennitypes.IImage;

}
describe('LibResponsiveImgComponent', (): void => {
  describe('as child', (): void => {
    let component: TestParentComponent;
    let fixture: ComponentFixture<TestParentComponent>;
    let imgDirective: ResponsiveImgDirective;
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        declarations: [
          ResponsiveImgDirective,
          TestParentComponent,
        ],
      })
        .compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent(TestParentComponent);
      component = fixture.componentInstance;
      imgDirective = fixture.debugElement.query(By.directive(ResponsiveImgDirective)).componentInstance;
      fixture.detectChanges();
    });

    it('should create', (): void => {
      expect(component).toBeTruthy();
      expect(imgDirective.src).toBeUndefined();
      expect(imgDirective.srcset).toBeUndefined();
    });

  });
});
