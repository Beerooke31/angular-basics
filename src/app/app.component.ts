import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = signal('Brooke');
  imageURL = signal('https://picsum.photos/200/300?grayscale');

  getName() {
    return this.name();
  }
}
