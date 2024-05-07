import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-topic-bar',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './topic-bar.component.html',
  styleUrl: './topic-bar.component.css'
})
export class TopicBarComponent {

}
