import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/signals.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit {
  public menuItems = signal<MenuItem[]>([]);

  ngOnInit() {
    this._setInitialValues();
  }
  private _setInitialValues() {
    this.menuItems = signal([
      {
        title: 'Counter',
        path: 'counter',
      },
      {
        title: 'User Info',
        path: 'user-info',
      },
      {
        title: 'Properties',
        path: 'properties',
      },
    ]);
  }
}
