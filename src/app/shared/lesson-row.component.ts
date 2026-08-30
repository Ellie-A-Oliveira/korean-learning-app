import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lesson } from '../core/models';

@Component({
  selector: 'hp-lesson-row',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="lesson">
      <div class="lesson-main">
        <div class="lesson-num">{{ index() + 1 }}</div>
        <div>
          <div class="lesson-title">{{ lesson().title }}</div>
          <div class="lesson-meta">{{ lesson().meta }}</div>
        </div>
      </div>
      <div class="toolbar">
        @if (showStatus()) {
          <span class="status" [class.done]="completed()">{{ completed() ? 'Completed' : 'Not started' }}</span>
        }
        <a class="btn" [routerLink]="['/lesson', lesson().id]">Open</a>
      </div>
    </div>
  `
})
export class LessonRowComponent {
  readonly lesson = input.required<Lesson>();
  readonly index = input.required<number>();
  readonly completed = input(false);
  readonly showStatus = input(false);
}
