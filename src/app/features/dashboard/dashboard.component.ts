import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LESSONS } from '../../data/study-data';
import { StudyStateService } from '../../core/study-state.service';
import { ShellCardComponent } from '../../shared/shell-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { LessonRowComponent } from '../../shared/lesson-row.component';
import { StatCardComponent } from '../../shared/stat-card.component';

@Component({selector:'hp-dashboard',standalone:true,imports:[RouterLink,ShellCardComponent,PageHeaderComponent,LessonRowComponent,StatCardComponent],template:`
<hp-page-header eyebrow="Dashboard" title="Build Korean from the ground up." subtitle="Characters first, then words, grammar, and spaced repetition." />
<div class="grid">
<hp-stat-card label="Lessons" [value]="state.completedCount() + ' / ' + lessons.length" [progress]="state.completedCount()/lessons.length*100" />
<hp-stat-card label="Mature cards" [value]="state.matureCount()" [progress]="Math.min(100,state.matureCount()*5)" />
<hp-stat-card label="Due now" [value]="state.dueCount()" [progress]="Math.min(100,state.dueCount()*5)" /></div>
<div class="section"><hp-card><h3>Today</h3><div class="toolbar"><a class="btn primary" routerLink="/lessons">Continue lesson</a><a class="btn" routerLink="/review">Start flashcards</a></div><p class="tiny muted">Every lesson introduces building blocks and immediately recycles them through words.</p></hp-card></div>
<div class="section"><h3>Curriculum</h3><div class="stack">@for(l of lessons.slice(0,4);track l.id){<hp-card><hp-lesson-row [lesson]="l" [index]="$index" /></hp-card>}</div></div>`})
export class DashboardComponent {readonly lessons=LESSONS;readonly Math=Math;readonly state=inject(StudyStateService);}
