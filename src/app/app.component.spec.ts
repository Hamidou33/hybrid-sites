import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  // let nestService: NestService;

  beforeEach(() => {
    // nestService = {
    //   getNestService: jest.fn(),
    // } as unknown as NestService;

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        // { provide: NestService, useValue: nestService }
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getNestService on ngOnInit', () => {
  //   const testData = 'testData'; // Remplacez par les données de test nécessaires
  //
  //   // Configurez le comportement de getNestService pour renvoyer des données simulées
  //   nestService.getNestService.mockReturnValue(of(testData));
  //
  //   // Appelez ngOnInit pour déclencher la demande de données
  //   component.ngOnInit();
  //
  //   // Vérifiez si getNestService a été appelé
  //   expect(nestService.getNestService).toHaveBeenCalled();
  //
  //   // Vérifiez si les données sont correctement manipulées (par exemple, en les stockant dans une variable)
  //   // Remplacez cela par votre propre logique en fonction de ce que fait votre composant avec les données.
  //   // Par exemple : expect(component.someData).toBe(testData);
  // });
});
