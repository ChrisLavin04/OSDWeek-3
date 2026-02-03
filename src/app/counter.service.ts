// Name: [Your Name]
// Student ID: [Your Student ID]
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count = signal(0);
  count = this._count.asReadonly();
  doubleCount = computed(() => this._count() * 2);

  increment() {
    this._count.update(c => c + 1);
  }

  decrement() {
    this._count.update(c => (c > 0 ? c - 1 : 0));
  }

  getCount() {
    return this.count;
  }
}
