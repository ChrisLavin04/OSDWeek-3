// Name: [Your Name]
// Student ID: [Your Student ID]
import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child2',
  template: `<b>child2.component</b><br>doubleCount is {{ counterService.doubleCount() }}`
})
export class Child2Component {
  constructor(public counterService: CounterService) {}
}
