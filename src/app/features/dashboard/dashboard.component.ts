import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LESSONS } from '../../data/study-data';
import { StudyStateService } from '../../core/study-state.service';
import { ShellCardComponent } from '../../shared/shell-card.component';

@Component({selector:'hp-dashboard',standalone:true,imports:[RouterLink,ShellCardComponent],template:`
<div class="top"><div><div class="eyebrow">Dashboard</div><h2>Build Korean from the ground up.</h2><p class="sub">Characters first, then words, grammar, and spaced repetition.</p></div></div>
<div class="grid">
<hp-card><div class="label">Lessons</div><div class="num">{{state.completedCount()}} / {{lessons.length}}</div><div class="bar"><div class="fill" [style.width.%]="state.completedCount()/lessons.length*100"></div></div></hp-card>
<hp-card><div class="label">Mature cards</div><div class="num">{{state.matureCount()}}</div><div class="bar"><div class="fill" [style.width.%]="Math.min(100,state.matureCount()*5)"></div></div></hp-card>
<hp-card><div class="label">Due now</div><div class="num">{{state.dueCount()}}</div><div class="bar"><div class="fill" [style.width.%]="Math.min(100,state.dueCount()*5)"></div></div></hp-card></div>
<div class="section"><hp-card><h3>Today</h3><div class="toolbar"><a class="btn primary" routerLink="/lessons">Continue lesson</a><a class="btn" routerLink="/review">Start flashcards</a></div><p class="tiny muted">Every lesson introduces building blocks and immediately recycles them through words.</p></hp-card></div>
<div class="section"><h3>Curriculum</h3><div class="stack">@for(l of lessons.slice(0,4);track l.id){<hp-card><div class="lesson"><div class="lesson-main"><div class="lesson-num">{{$index+1}}</div><div><div class="lesson-title">{{l.title}}</div><div class="lesson-meta">{{l.meta}}</div></div></div><a class="btn" [routerLink]="['/lesson',l.id]">Open</a></div></hp-card>}</div></div>`})
export class DashboardComponent {readonly lessons=LESSONS;readonly Math=Math;readonly state=inject(StudyStateService);}
