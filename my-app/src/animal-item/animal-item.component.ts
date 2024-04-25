import { Component, Input } from '@angular/core';
import { Animal } from '../app/models/animal';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})
export class AnimalItemComponent {

  constructor() {
    this.animal = new Animal("Mingau", "Felino", 18, "Macho");

  }
  @Input() animal : Animal = new Animal("", "",0, "" ); 
}