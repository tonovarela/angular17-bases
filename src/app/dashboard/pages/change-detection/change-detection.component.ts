import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    TitleComponent,
    CommonModule
  ],  
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export default class ChangeDetectionComponent { 

  public frameworkAsSignal = signal({
    name:"Angular",
    releasedYear:2016
  });

  public frameworkAsProperty = {
    name:"Angular",
    releasedYear:2016
  };

  currentFramework = computed(()=>{
    return this.frameworkAsSignal().name;
  })

  constructor(){
    setTimeout(()=>{
      //this.frameworkAsProperty.name = "React";      
      this.frameworkAsSignal.update(f=>({...f,name:"ReactJS"}));
      console.log("Hecho")
      
    },3000);

  
  }

}
