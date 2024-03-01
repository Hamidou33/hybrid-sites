import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
