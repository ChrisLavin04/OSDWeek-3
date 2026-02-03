// Name: [Your Name]
// Student ID: [Your Student ID]
import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  template: `<b>child1.component</b><br>count is {{ counterService.count() }}`
})
export class Child1Component {
  constructor(public counterService: CounterService) {}
}
