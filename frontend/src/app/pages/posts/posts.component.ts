import { Component } from '@angular/core';
import { TopicBarComponent } from '../../components/topic-bar/topic-bar.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [TopicBarComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
