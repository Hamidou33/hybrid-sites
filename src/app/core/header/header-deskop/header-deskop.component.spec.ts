import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderDeskopComponent } from "./header-deskop.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("HeaderDeskopComponent", () => {
  let component: HeaderDeskopComponent;
  let fixture: ComponentFixture<HeaderDeskopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderDeskopComponent, RouterTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(HeaderDeskopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
