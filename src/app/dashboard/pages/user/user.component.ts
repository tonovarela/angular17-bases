import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { TitleComponent } from '@shared';
import { switchMap } from 'rxjs';
import { UsersService } from '@services';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export default class UserComponent {
  private route = inject(ActivatedRoute)
  usersService = inject(UsersService);
  public user = toSignal(this.route.params.pipe(switchMap(params => this.usersService.getUsersById(params['id']))))
  nameComplete = computed(()=>{
    if (this.user() == undefined){
      return "Información del usuario";
    }
    return `${this.user()?.first_name} ${this.user()?.last_name}` ;
  })

}
