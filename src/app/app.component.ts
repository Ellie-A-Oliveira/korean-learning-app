import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';

@Component({selector:'hp-root', standalone:true, imports:[RouterOutlet, LayoutComponent], template:`<hp-layout><router-outlet /></hp-layout>`})
export class AppComponent {}
