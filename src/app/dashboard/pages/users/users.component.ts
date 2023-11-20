import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services';
import { TitleComponent } from '@shared';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,TitleComponent,RouterModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent { 

  public userService = inject(UsersService)

  constructor(){
    console.log(this.userService.users())
  }

}
