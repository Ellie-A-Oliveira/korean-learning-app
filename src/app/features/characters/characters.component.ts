import { Component, inject } from '@angular/core';
import { CHARACTERS } from '../../data/study-data';
import { StudyStateService } from '../../core/study-state.service';
import { Character } from '../../core/models';
import { ShellCardComponent } from '../../shared/shell-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
@Component({selector:'hp-characters',standalone:true,imports:[ShellCardComponent,PageHeaderComponent],template:`<hp-page-header eyebrow="Jamo" title="Characters & building blocks" subtitle="Learn the symbol, sound, and the syllable blocks it can form." /><div class="grid chars">@for(c of chars;track c.symbol){<hp-card><div class="char">{{c.symbol}}</div><strong>{{c.roman}}</strong><div class="muted tiny">{{c.note}}</div><div class="section compact"><div class="tiny muted">Example blocks</div><div class="chips">@for(x of c.examples;track x){<span class="chip korean">{{x}}</span>}</div></div><button class="btn" (click)="add(c)">{{state.card('c:'+c.symbol)?'In deck':'Add to review'}}</button></hp-card>}</div>`})
export class CharactersComponent {readonly chars=Object.values(CHARACTERS);readonly state=inject(StudyStateService);add(c:Character){this.state.addCharacterCard(c.symbol,c.roman,c.note)} }
