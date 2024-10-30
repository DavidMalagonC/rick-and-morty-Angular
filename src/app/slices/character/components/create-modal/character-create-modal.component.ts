import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-create-modal',
  templateUrl: './character-create-modal.component.html',
  styleUrls: ['./character-create-modal.component.scss']
})
export class CharacterCreateModalComponent {
  @Output() characterCreated = new EventEmitter<Character>();
  @Output() close = new EventEmitter<void>();

  characterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      status: ['Alive', Validators.required],
      species: ['', Validators.required],
      gender: ['Male', Validators.required],
      image: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.characterForm.valid) {
      const newCharacter: Character = {
        id: Date.now(),
        ...this.characterForm.value,
        type: 'NEW',
        origin: { name: '', url: '' },
        location: { name: '', url: '' },
        episode: [],
        url: '',
        created: new Date().toISOString()
      };

      this.characterService.createCharacter(newCharacter).subscribe(
        (character: Character) => {
          this.characterCreated.emit(character);
          this.close.emit();
        },
        (error: any) => console.error('Error creating character', error)
      );
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}
