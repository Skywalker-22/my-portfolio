import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Portfolio';
  isDarkTheme: boolean = false;

  @HostBinding('class') className = '';

  constructor() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      this.isDarkTheme = localStorage.getItem('theme') === 'dark' ? true : false;
      this.className = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    } else {
      this.className = 'light-theme';
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.className = this.isDarkTheme ? 'dark-theme' : 'light-theme';

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }
  }
}