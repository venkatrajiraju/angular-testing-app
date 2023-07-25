import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger : LoggerService){

  }

  add(a : number, b:number){

    this.logger.log('Add method is called');
    return a+b;
  }

  subtract(a:number, b:number){

    this.logger.log('Subtract method is called');
    return a-b;
  }

}
