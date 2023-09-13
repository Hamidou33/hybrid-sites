import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDeskopComponent } from './header-deskop.component';

describe('HeaderDeskopComponent', () => {
  let component: HeaderDeskopComponent;
  let fixture: ComponentFixture<HeaderDeskopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDeskopComponent]
    });
    fixture = TestBed.createComponent(HeaderDeskopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
