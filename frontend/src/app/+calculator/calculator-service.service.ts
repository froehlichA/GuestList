import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  calculate(n1: number, n2: number, op: string): number {
    let result = 0;
    if (Number.isInteger(n1) && Number.isInteger(n2)) {
      switch (op) {
        case '+': result = n1 + n2; break;
        case '*': result = n1 * n2; break;
        case '-': result = n1 - n2; break;
        case '/': result = n1 / n2; break;
        case '^': result = n1 ** n2; break;
        case 'sqrt': result = Math.pow(n1, 1 / n2); break;
        default: alert('Not a valid operator'); break;
      }
      return result;
    }
    return null;
  }

}
