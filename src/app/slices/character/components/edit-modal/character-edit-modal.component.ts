import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-edit-modal',
  templateUrl: './character-edit-modal.component.html',
})
export class CharacterEditModalComponent {
  @Input() character: Character = { 
    id: 0, 
    name: '', 
    species: '', 
    status: 'unknown', 
    type: '', 
    gender: 'unknown', 
    origin: { name: '', url: '' }, 
    location: { name: '', url: '' }, 
    image: '', 
    episode: [], 
    url: '', 
    created: '' 
  };
  @Output() save = new EventEmitter<Character>();
  @Output() close = new EventEmitter<void>();

  onSave(): void {
    if (this.character) {
      this.save.emit(this.character);
    }
  }

  onClose(): void {
    this.close.emit();
  }
}
