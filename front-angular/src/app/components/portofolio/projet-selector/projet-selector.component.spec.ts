import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjetSelectorComponent } from "./projet-selector.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe("ProjetSelectorComponent", () => {
  let component: ProjetSelectorComponent;
  let fixture: ComponentFixture<ProjetSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetSelectorComponent, RouterTestingModule, TranslateModule.forRoot()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
