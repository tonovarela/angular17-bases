import { CommonModule } from '@angular/common';
import {  Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template:`
  <section class="w-full h-[600px]" [ngClass]="cssClass" >
  Heavy component
  </section>
  `
  
})
export class HeavyLoadersSlowComponent {
  @Input({required:true}) cssClass!:string;
  constructor(){
    const start = Date.now();
    while(Date.now() - start < 3000){
      
    }
    console.log("Heavy Loaders Slow")
    
  }
 }
