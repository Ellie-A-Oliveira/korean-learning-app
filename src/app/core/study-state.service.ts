import { Injectable, computed, signal } from '@angular/core';
import { AppState, CardState, Rating, CardType } from './models';
import { VOCAB } from '../data/study-data';

const KEY='hangeul-path-v2';
const defaultState=():AppState=>({completedLessons:{},cards:{}});

@Injectable({providedIn:'root'})
export class StudyStateService {
  private readonly state=signal<AppState>(this.load());
  readonly snapshot=this.state.asReadonly();
  readonly dueCount=computed(()=>Object.values(this.state().cards).filter(c=>c.due<=Date.now()).length);
  readonly completedCount=computed(()=>Object.values(this.state().completedLessons).filter(Boolean).length);
  readonly matureCount=computed(()=>Object.values(this.state().cards).filter(c=>c.interval>=21).length);

  private load():AppState { try{return {...defaultState(),...JSON.parse(localStorage.getItem(KEY)??'{}')}} catch{return defaultState()} }
  private save(){localStorage.setItem(KEY,JSON.stringify(this.state()));}
  private mutate(fn:(s:AppState)=>void){const next=structuredClone(this.state());fn(next);this.state.set(next);this.save();}

  completeLesson(id:string){this.mutate(s=>s.completedLessons[id]=true);}
  card(id:string){return this.state().cards[id];}
  upsertCard(card:CardState){this.mutate(s=>s.cards[card.id]=card);}
  ensureVocabCards(limit=8){
    this.mutate(s=>{VOCAB.slice(0,limit).forEach(v=>{const id='v:'+v.word;if(!s.cards[id])s.cards[id]={id,type:'vocabulary',front:v.word,back:v.roman,extra:v.meaning,due:Date.now(),interval:0,ease:2.5,reps:0,lapses:0};});});
  }
  reviewDue(){return Object.values(this.state().cards).filter(c=>c.due<=Date.now()).sort((a,b)=>a.due-b.due);}
  rate(id:string,rating:Rating){
    this.mutate(s=>{
      const c=s.cards[id]; if(!c)return;
      const now=Date.now();
      if(rating==='again'){c.interval=0;c.ease=Math.max(1.3,c.ease-.2);c.lapses++;c.due=now+60_000;return;}
      c.reps++;
      const mult=rating==='good'?c.ease:rating==='hard'?Math.max(1.5,c.ease-.15):Math.min(3.2,c.ease+.15);
      c.ease=mult;c.interval=c.interval===0?(rating==='hard'?1:rating==='easy'?4:1):Math.max(2,Math.round(c.interval*mult));c.due=now+c.interval*86_400_000;
    });
  }
  addCharacterCard(symbol:string, roman:string, extra:string){
    const id='c:'+symbol;
    const existing=this.card(id);
    if(existing)return;
    this.upsertCard({id,type:'character',front:symbol,back:roman,extra,due:Date.now(),interval:0,ease:2.5,reps:0,lapses:0});
  }
}
