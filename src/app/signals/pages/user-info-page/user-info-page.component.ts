import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/signals.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss',
})
export class UserInfoPageComponent implements OnInit {
  public userId = signal<number>(1);
  public user = signal<User | undefined>(undefined);
  public fullName = computed<string>(() => {
    if (!this.user()) return '';
    return `${this.user().first_name} ${this.user().last_name}`;
  });
  public userWasFound = signal<boolean>(false);
  private _usersService = inject(UsersServiceService);

  ngOnInit(): void {
    this._setInitialValues();
  }

  public loadUser(id: number): void {
    if (id <= 0) return;
    this.userId.set(id);
    this._usersService.getUserById(id).subscribe({
      next: (response) => {
        this.user.set(response);
        this.userWasFound.set(true);
      },
      error: (err) => {
        console.error(err);
        this.userWasFound.set(false);
        this.user.set(undefined);
      },
    });
  }

  private _setInitialValues(): void {
    this.loadUser(this.userId());
  }
}
