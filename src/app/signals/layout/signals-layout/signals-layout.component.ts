import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  selector: 'app-signals-layout',
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.scss',
})
export class SignalsLayoutComponent {}
