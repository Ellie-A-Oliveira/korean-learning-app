import { Component, inject } from '@angular/core'; import { ActivatedRoute, Router, RouterLink } from '@angular/router'; import { LESSONS,VOCAB,CHARACTERS } from '../../data/study-data'; import { Lesson, Vocabulary } from '../../core/models'; import { StudyStateService } from '../../core/study-state.service'; import { PageHeaderComponent } from '../../shared/page-header.component';
@Component({selector:'hp-lesson-player',standalone:true,imports:[RouterLink,PageHeaderComponent],template:`@if(lesson;as l){<hp-page-header [eyebrow]="l.title" [title]="l.meta" subtitle="Learn the new symbols, then connect them to real Korean words."><a class="btn" routerLink="/lessons">Back</a></hp-page-header>
@if(step===0){<div class="card center"><div class="char">{{newChars(l).join(' ')}}</div><p class="muted">Say each symbol aloud and notice how the pieces combine into syllable blocks.</p><button class="btn primary" (click)="next()">I’m ready</button></div>
}@if(step>0 && word){<div class="card center"><div class="word">{{word.word}}</div><div class="roman">{{word.roman}}</div><p class="muted">{{word.meaning}}</p><div class="chips">@for(c of word.chars;track c){<span class="chip">{{c}}</span>}</div><div class="toolbar center"><button class="btn primary" (click)="next()">Next word</button><a class="btn" routerLink="/review">Review now</a></div></div>
}}`})
export class LessonPlayerComponent {
 lesson:Lesson=LESSONS[0];step=0;words=VOCAB.slice();word:Vocabulary|undefined;
 private readonly router=inject(Router);private readonly state=inject(StudyStateService);private readonly route=inject(ActivatedRoute);
 constructor(){this.route.paramMap.subscribe(p=>{this.lesson=LESSONS.find(l=>l.id===p.get('id'))??LESSONS[0];this.step=0;this.words=VOCAB.filter(v=>this.lesson.vocabulary.includes(v.word));this.word=undefined;});}
 newChars(l:Lesson){return l.items.filter(x=>CHARACTERS[x]).slice(0,6)}
 next(){if(this.step===0){if(!this.words.length){this.state.completeLesson(this.lesson.id);this.router.navigate(['/lessons']);return;}this.step=1;this.word=this.words[0];this.state.ensureVocabCards();return;}const i=this.step;this.word=this.words[i];if(!this.word){this.state.completeLesson(this.lesson.id);this.router.navigate(['/lessons']);return;}this.state.ensureVocabCards();this.step++;}
}
