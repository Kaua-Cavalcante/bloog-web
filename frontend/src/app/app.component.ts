import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostsComponent } from './pages/posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, HeroComponent, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}