import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent, title: "Bloog"},
    { 'path': 'topics', component: TopicsComponent, title: "Topics" }
];
