import {TestBed} from '@angular/core/testing';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AuthenticationService} from '../authentification/authentification.service';
import {User} from "../model/user";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
        {
          provide: AuthenticationService,
          useValue: {
            currentUserValue: null, // Mock the currentUserValue as needed
          },
        },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authenticationService = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if the user is logged in', () => {
    const currentUser = new User();
    jest.spyOn(authenticationService, 'currentUserValue', 'get').mockReturnValue(currentUser);

    const canActivate = guard.canActivate(new ActivatedRouteSnapshot(), {} as RouterStateSnapshot);

    expect(canActivate).toBe(true);
  });

  it('should redirect to login if the user is not logged in', () => {
    jest.spyOn(authenticationService, 'currentUserValue', 'get').mockReturnValue(new User());

    const navigateSpy = jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));

    const canActivate = guard.canActivate(new ActivatedRouteSnapshot(), {url: '/protected'} as RouterStateSnapshot);

    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['home/login'], {queryParams: {returnUrl: '/protected'}});
  });
});
