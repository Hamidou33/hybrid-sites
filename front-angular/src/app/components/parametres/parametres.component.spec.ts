import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ParametresComponent } from "./parametres.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("ParametresComponent", () => {
  let component: ParametresComponent;
  let fixture: ComponentFixture<ParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresComponent, RouterTestingModule, TranslateModule.forRoot()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
