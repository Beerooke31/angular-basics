import { Component, signal } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent],
})
export class AppComponent {
  name = signal('Brooke');
  imageURL = signal(
    'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ'
  );

  getName() {
    return this.name();
  }

  changeImage(e: KeyboardEvent) {
    this.imageURL.set((e.target as HTMLInputElement).value);
  }

  logImage(e: string) {
    console.log(e);
  }
}
