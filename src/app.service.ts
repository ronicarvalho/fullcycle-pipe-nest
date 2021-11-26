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
}
