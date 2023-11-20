import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,TitleComponent
  ],
  template: `
<app-title title="View transition 2"></app-title>
<section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300"
    style="view-transition-name: hero1"
    >

    <div class="bg-purple-500 rounded w-32 h-32 fixed bottom-16 right-10" style="view-transition-name: hero2">
        
    </div>
</section>
  `,
    
})
export default class ViewTransition2Component { }
