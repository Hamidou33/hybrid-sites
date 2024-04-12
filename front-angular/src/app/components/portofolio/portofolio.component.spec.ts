import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PortofolioComponent } from "./portofolio.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("PortofolioComponent", () => {
  let component: PortofolioComponent;
  let fixture: ComponentFixture<PortofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioComponent, RouterTestingModule, TranslateModule.forRoot()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
