import { Component } from '@angular/core';
import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalsLayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals-playground';
}
