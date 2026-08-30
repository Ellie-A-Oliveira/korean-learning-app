import { Component, Input } from '@angular/core';
@Component({selector:'hp-card',standalone:true,template:`<section class="card"><ng-content /></section>`})
export class ShellCardComponent { @Input() title=''; }
