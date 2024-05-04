import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
