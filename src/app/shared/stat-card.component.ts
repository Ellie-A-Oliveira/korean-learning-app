import { Component, input } from '@angular/core';

@Component({
  selector: 'hp-stat-card',
  standalone: true,
  template: `
    <section class="card">
      <div class="label">{{ label() }}</div>
      <div class="num">{{ value() }}</div>
      <div class="bar"><div class="fill" [style.width.%]="progress()"></div></div>
    </section>
  `
})
export class StatCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly progress = input.required<number>();
}
