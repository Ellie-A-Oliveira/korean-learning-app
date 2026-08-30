import { Component, input } from '@angular/core';

@Component({
  selector: 'hp-page-header',
  standalone: true,
  template: `
    <div class="top">
      <div>
        <div class="eyebrow">{{ eyebrow() }}</div>
        <h2>{{ title() }}</h2>
        <p class="sub">{{ subtitle() }}</p>
      </div>
      <ng-content />
    </div>
  `
})
export class PageHeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
