import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeavyLoadersSlowComponent, TitleComponent } from '@shared';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    HeavyLoadersSlowComponent
  ],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class DeferViewsComponent { }
