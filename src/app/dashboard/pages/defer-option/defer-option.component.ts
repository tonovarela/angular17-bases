import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent, TitleComponent } from '@shared';


@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    HeavyLoadersFastComponent
  ],
  templateUrl: './defer-option.component.html',
  styleUrls: ['./defer-option.component.css'],
})
export default class DeferOptionComponent { }
