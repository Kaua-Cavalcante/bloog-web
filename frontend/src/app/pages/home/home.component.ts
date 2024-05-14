import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PostsComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
