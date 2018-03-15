import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator-service.service';

@Component({
  selector: 'htl-calculator',
  styleUrls: ['./calculator.component.css'],
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  n1: number;
  n2: number;
  op: string;
  result: number;
  calculator: CalculatorService;

  constructor(private _calculatorService: CalculatorService) {
  }

  calculateResult() {
    const result: number = this._calculatorService.calculate(this.n1, this.n2, this.op);
    (result != null) ? this.result = result : this.back();
  }

  back() {
    alert('Sorry, your input was wrong!');
    this.n1 = 1;
    this.n2 = 1;
    this.op = '+';
    this.result = this.n1 + this.n2;
  }
}
