import {ComponentFixture, TestBed} from '@angular/core/testing';
import { ThemeSelectorComponent } from "./theme-selector.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";


describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent, RouterTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
