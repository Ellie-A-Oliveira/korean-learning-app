import { Component } from '@angular/core'; import { ActivatedRoute, Router, RouterLink } from '@angular/router'; import { LESSONS,VOCAB,CHARACTERS } from '../../data/study-data'; import { StudyStateService } from '../../core/study-state.service';
@Component({selector:'hp-lesson-player',standalone:true,imports:[RouterLink],template:`@if(lesson;as l){<div class="top"><div><div class="eyebrow">{{l.title}}</div><h2>{{l.meta}}</h2><p class="sub">Learn the new symbols, then connect them to real Korean words.</p></div><a class="btn" routerLink="/lessons">Back</a></div>
@if(step===0){<div class="card center"><div class="char">{{newChars(l).join(' ')}}</div><p class="muted">Say each symbol aloud and notice how the pieces combine into syllable blocks.</p><button class="btn primary" (click)="next()">I’m ready</button></div>
}@if(step>0 && word){<div class="card center"><div class="word">{{word.word}}</div><div class="roman">{{word.roman}}</div><p class="muted">{{word.meaning}}</p><div class="chips">@for(c of word.chars;track c){<span class="chip">{{c}}</span>}</div><div class="toolbar center"><button class="btn primary" (click)="next()">Next word</button><a class="btn" routerLink="/review">Review now</a></div></div>
}}`})
export class LessonPlayerComponent {
 lesson=LESSONS[0];step=0;words=VOCAB.slice();word:any;
 constructor(route:ActivatedRoute,private router:Router,private state:StudyStateService){route.paramMap.subscribe(p=>{this.lesson=LESSONS.find(l=>l.id===p.get('id'))??LESSONS[0];this.step=0;this.words=VOCAB.filter(v=>this.lesson.vocabulary.includes(v.word));this.word=undefined;});}
 newChars(l:any){return l.items.filter((x:string)=>CHARACTERS[x]).slice(0,6)}
 next(){if(this.step===0){if(!this.words.length){this.state.completeLesson(this.lesson.id);this.router.navigate(['/lessons']);return;}this.step=1;this.word=this.words[0];this.state.ensureVocabCards();return;}const i=this.step;this.word=this.words[i];if(!this.word){this.state.completeLesson(this.lesson.id);this.router.navigate(['/lessons']);return;}this.state.ensureVocabCards();this.step++;}
}
