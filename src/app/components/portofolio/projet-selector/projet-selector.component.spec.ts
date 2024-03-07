import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSelectorComponent } from './projet-selector.component';

describe('ProjetSelectorComponent', () => {
  let component: ProjetSelectorComponent;
  let fixture: ComponentFixture<ProjetSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
