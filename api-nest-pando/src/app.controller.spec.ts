import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {AppService} from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  // describe('getTitre', () => {
  //   it('should return the title', () => {
  //     const expectedResult = 'Your expected title';
  //     jest.spyOn(appService, 'getTitre').mockReturnValue(expectedResult);
  //
  //     const result = appController.getTitre();
  //     expect(result).toBe(expectedResult);
  //   });
  // });

  // describe('getArrayNav', () => {
  //   it('should return an array of navigation labels', () => {
  //     const expectedArray = ['Label 1', 'Label 2', 'Label 3'];
  //     jest.spyOn(appService, 'getLibelleNav').mockReturnValue(expectedArray);
  //
  //     const result = appController.getArrayNav();
  //     expect(result).toBe(expectedArray);
  //   });
  // });

  // xdescribe('findAll', () => {
  //   it('should return a string', () => {
  //     const result = appController.findAll(null); // You can pass null for the request in this example
  //     expect(typeof result).toBe('string');
  //   });
  // });

  describe('create', () => {
    it('should return a string', () => {
      const result = appController.create();
      expect(typeof result).toBe('string');
    });
  });

  describe('findOne', () => {
    it('should return a string with the provided ID', () => {
      const params = { id: '123' };
      const result = appController.findOne(params);
      expect(result).toBe('This action returns a #123 cat');
    });
  });
});

