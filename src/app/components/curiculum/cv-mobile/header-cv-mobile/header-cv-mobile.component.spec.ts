import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderCvMobileComponent } from "./header-cv-mobile.component";

describe('HeaderCvMobileComponent', () => {
  let component: HeaderCvMobileComponent;
  let fixture: ComponentFixture<HeaderCvMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCvMobileComponent]
    });
    fixture = TestBed.createComponent(HeaderCvMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
