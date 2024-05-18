import { Component } from '@angular/core';
import { NavigationSignedComponent } from '../../components/navigation-signed/navigation-signed.component';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [NavigationSignedComponent],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {

}
