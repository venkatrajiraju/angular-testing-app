import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service"

describe('Calculator service ',()=>{
 
  let calculator: CalculatorService
  let mockLogger:any;
  beforeEach(()=>{
    mockLogger= jasmine.createSpyObj('LoggerService',['log']);
    calculator= new CalculatorService(mockLogger);
 })

 it('add function should add numbers', ()=>{

  let result=calculator.add(2,2);

  expect(result).toBe(4);
  expect(mockLogger.log).toHaveBeenCalledTimes(1);

  
 })

 it('subtract function should subtract two numbers', ()=>{

  let result=calculator.subtract(2,2);

  expect(result).toBe(0);
  expect(mockLogger.log).toHaveBeenCalledTimes(1);

  
 })
})