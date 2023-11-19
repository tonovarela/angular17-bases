import { CommonModule } from '@angular/common';
import {  Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],  
})
export class TitleComponent {
  @Input({required:true}) title!: string;
  @Input({transform:booleanAttribute}) showShadow=false


}
