import { Component } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { TopicBarComponent } from '../../components/topic-bar/topic-bar.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [TopicBarComponent, PostCardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
