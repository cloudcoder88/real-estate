import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  
})
export class AppComponent {
  title = 'house-project';
  
    

      
  /**inquire(propertyName: string): void {
    alert(`thanks for your interest in : ${propertyName}. we will get back to you shortly`);
  }**/
}
