import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {User} from '../models/user';
import {AuthenticationService} from "./authentification.service";

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService],
    });
    service = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', () => {
    const dummyUser: User = {
      firstName: "",
      authdata: "",
      lastName: "",
      id: 1,
      username: 'testuser',
      password: 'testpassword'
      // Add other properties as needed
    };

    const username = 'testuser';
    const password = 'testpassword';

    service.login(username, password).subscribe((user: User) => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpTestingController.expectOne('/users/authenticate');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({username, password});

    req.flush(dummyUser);

    httpTestingController.verify();
  });

  it('should log out a user', () => {
    jest.spyOn(localStorage, 'removeItem');
    jest.spyOn(service.currentUserSubject, 'unsubscribe');

    service.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
    expect(service.currentUserSubject.unsubscribe).toHaveBeenCalled();
  });
});
