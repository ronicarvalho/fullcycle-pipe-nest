import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('first-name', () =>{
    it('should return "Roni Peterson"', () => {
      expect(appController.getFirstName()).toBe('Roni Peterson');
    });
  });

  describe('last-name', () =>{
    it('should return "Carvalho"', () => {
      expect(appController.getLastName()).toBe('Carvalho');
    });
  });
});
