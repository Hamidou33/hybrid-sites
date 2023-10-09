import {Test, TestingModule} from '@nestjs/testing';
import {AdminController} from './admin.controller';

describe('AdminController', () => {
  let adminController: AdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
    }).compile();

    adminController = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
    expect(adminController).toBeDefined();
  });

  describe('index', () => {
    it('should return "Admin page"', () => {
      const result = adminController.index();
      expect(result).toBe('Admin page');
    });
  });
});
