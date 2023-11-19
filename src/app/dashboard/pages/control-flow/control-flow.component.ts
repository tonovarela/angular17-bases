import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared';


type Grade ="A"|"B"|"F";
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent { 

  public showContent= signal(false)
  public frameworks =signal<Array<string>>(['Angular','React','Vue',"AngularJS","ReactJS"]);
  public frameworks2 =signal<Array<string>>([]);
  public grade =signal<Grade>('B');
  toogleContent(){
    this.showContent.set(!this.showContent());
  }
}
