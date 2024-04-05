import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderMobileComponent } from "./header-mobile.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("HeaderMobileComponent", () => {
  let component: HeaderMobileComponent;
  let fixture: ComponentFixture<HeaderMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderMobileComponent, RouterTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(HeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
