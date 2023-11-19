import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './view-transition.component.html',
  styleUrls: ['./view-transition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent { }
