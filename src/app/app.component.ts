import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],// es muy importante la importación de RouterLink para que pueda navegar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-page-angular-bootstrap';

  menuOption: string = ''
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
