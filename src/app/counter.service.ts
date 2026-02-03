// Name: [Christopher Lavin]
// Student ID: [S00251319]
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count = signal(0);
  count = this._count.asReadonly();
  doubleCount = computed(() => this._count() * 2);

  increment() {
    this._count.update((value) => value + 1);
  }

  decrement() {
    this._count.update((value) => (value > 0 ? value - 1 : 0));
  }

  getCount() {
    return this.count;
  }
}
