import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FreelanceComponent } from "./freelance.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";

describe('FreelanceComponent', () => {
  let component: FreelanceComponent;
  let fixture: ComponentFixture<FreelanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FreelanceComponent, TranslateModule.forRoot(), RouterTestingModule]
    });
    fixture = TestBed.createComponent(FreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
