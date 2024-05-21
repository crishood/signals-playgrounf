import { Component, OnDestroy, effect, signal } from '@angular/core';
import { User } from '../../interfaces/signals.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }
  public user = signal<User>({
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: '',
    avatar: '',
  });

  public userChangedEffect = effect(() => {
    console.log(this.user().first_name);
  });

  public onFieldUpdated(field: keyof User, value: string) {
    //this.user.set({ ...this.user(), [field]: value });

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;
      }

      return current;
    });
  }
}
