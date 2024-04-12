import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IdeeComponent } from "./idee.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

describe("IdeeComponent", () => {
  let component: IdeeComponent;
  let fixture: ComponentFixture<IdeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IdeeComponent, RouterTestingModule, TranslateModule.forRoot(), HttpClientModule]
    });
    fixture = TestBed.createComponent(IdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
