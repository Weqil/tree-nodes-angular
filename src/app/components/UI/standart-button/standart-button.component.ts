import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standart-button',
  imports: [],
  templateUrl: './standart-button.component.html',
  styleUrl: './standart-button.component.scss',
})
export class StandartButtonComponent {
  @Input() buttonText: string = '';
}
