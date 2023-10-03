import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentification/authentification.service';
import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let router: Router;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {
                returnUrl: '/'
              }
            }
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn()
          }
        },
        {
          provide: AuthenticationService,
          useValue: {
            currentUserValue: null,
            login: jest.fn(() => {
              return {
                pipe: () => ({
                  subscribe: () => {
                  }
                })
              };
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    router = TestBed.inject(Router);
    authenticationService = TestBed.inject(AuthenticationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm with empty fields', () => {
    component.ngOnInit();
    expect(component.loginForm.get('username')!.value).toEqual('');
    expect(component.loginForm.get('password')!.value).toEqual('');
  });

  it('should set returnUrl to default if not provided in route params', () => {
    const route = TestBed.inject(ActivatedRoute);
    route.snapshot.queryParams.returnUrl = undefined;
    component.ngOnInit();
    expect(component.returnUrl).toEqual('/');
  });

  xit('should navigate to /home when form is submitted', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });

  xit('should not navigate to /home if form is invalid', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    const form = component.loginForm;
    form.get('username')!.setValue('');
    form.get('password')!.setValue('');
    component.onSubmit();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  // You can add more test cases for the onSubmit function as needed.

  // Mocking the AuthenticationService and testing its usage can be added as well.
});
