import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-topic-bar',
  standalone: true,
  imports: [ModalComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './topic-bar.component.html',
  styleUrl: './topic-bar.component.css'
})
export class TopicBarComponent {
  
}