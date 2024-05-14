import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  public counter = signal<number>(0);
  public squareCounter = computed(() => this.counter() ** 2);
  public onIncreaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
