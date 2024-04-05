import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguageSelectorComponent } from "./language-selector.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("LanguageSelectorComponent", () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageSelectorComponent, RouterTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
