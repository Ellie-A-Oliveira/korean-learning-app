import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'dashboard'},
  {path:'dashboard', loadComponent:()=>import('./features/dashboard/dashboard.component').then(m=>m.DashboardComponent)},
  {path:'lessons', loadComponent:()=>import('./features/lessons/lesson-path.component').then(m=>m.LessonPathComponent)},
  {path:'characters', loadComponent:()=>import('./features/characters/characters.component').then(m=>m.CharactersComponent)},
  {path:'practice', loadComponent:()=>import('./features/practice/practice.component').then(m=>m.PracticeComponent)},
  {path:'review', loadComponent:()=>import('./features/review/review.component').then(m=>m.ReviewComponent)},
  {path:'lesson/:id', loadComponent:()=>import('./features/lessons/lesson-player.component').then(m=>m.LessonPlayerComponent)},
  {path:'**', redirectTo:'dashboard'}
];
