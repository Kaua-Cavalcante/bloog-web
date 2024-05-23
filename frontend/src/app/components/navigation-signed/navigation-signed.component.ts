import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation-signed',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './navigation-signed.component.html',
  styleUrl: './navigation-signed.component.css'
})
export class NavigationSignedComponent {

}
