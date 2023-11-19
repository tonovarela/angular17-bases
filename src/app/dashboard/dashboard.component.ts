import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '@shared';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,SideMenuComponent],
  templateUrl: './dashboard.component.html',  
})
export default class DashboardComponent {

}
