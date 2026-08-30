export type CardType = 'character'|'vocabulary';
export type Rating = 'again'|'hard'|'good'|'easy';
export interface Character {symbol:string; type:'vowel'|'consonant'; roman:string; note:string; examples:string[];}
export interface Vocabulary {word:string; roman:string; meaning:string; chars:string[]; tags:string[];}
export interface Lesson {id:string; title:string; meta:string; items:string[]; vocabulary:string[];}
export interface CardState {id:string; type:CardType; front:string; back:string; extra:string; due:number; interval:number; ease:number; reps:number; lapses:number;}
export interface AppState {completedLessons:Record<string,boolean>; cards:Record<string,CardState>; activeLesson?:{id:string;step:number};}
