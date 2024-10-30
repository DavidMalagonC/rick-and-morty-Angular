import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-delete-modal',
  templateUrl: './character-delete-modal.component.html',
})
export class CharacterDeleteModalComponent {
  @Input() character: Character | null = null;
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
