import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getFirstName(): string {
    return 'Roni Peterson';
  }
  
  getLastName(): string {
    return 'Carvalho';
  }

  getCityName(): string {
    return 'Campinas';
  }
  
  getStateName(): string {
    return 'Sao Paulo';
  }

  getCountryName(): string {
    return 'Brasil';
  }
}
