import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StudyStateService } from '../../core/study-state.service';

@Component({selector:'hp-layout',standalone:true,imports:[RouterLink,RouterLinkActive],template:`
<div class="app"><aside><div class="brand"><h1>Hangeul Path</h1><p>Korean from the building blocks up</p></div>
<nav>
<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a><a routerLink="/lessons" routerLinkActive="active">Lesson path</a><a routerLink="/characters" routerLinkActive="active">Characters</a><a routerLink="/practice" routerLinkActive="active">Practice</a><a routerLink="/review" routerLinkActive="active">Flashcards <span>{{state.dueCount()}}</span></a>
</nav></aside><main><ng-content /></main></div>`})
export class LayoutComponent { constructor(public state:StudyStateService){} }
