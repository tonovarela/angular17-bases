import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public menuItems = routes
      .map(r => r.children ?? [])
      .flat()
      .filter(r => r && r.path)
      .filter(r=>!r.path?.includes(":"));
  constructor() {
    
    
  }

}
