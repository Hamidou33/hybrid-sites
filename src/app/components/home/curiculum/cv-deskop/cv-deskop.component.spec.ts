import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDeskopComponent } from './cv-deskop.component';

describe('CvDeskopComponent', () => {
  let component: CvDeskopComponent;
  let fixture: ComponentFixture<CvDeskopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvDeskopComponent]
    });
    fixture = TestBed.createComponent(CvDeskopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
