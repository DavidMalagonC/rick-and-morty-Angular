import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  @Input() character?: Character;
  @Output() formSubmit = new EventEmitter<Character>();

  characterForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: [this.character?.name || '', Validators.required],
      status: [this.character?.status || '', Validators.required],
      species: [this.character?.species || '', Validators.required],
      type: [this.character?.type || ''],
      gender: [this.character?.gender || '', Validators.required],
      image: [this.character?.image || ''],
    });
  }

  submitForm(): void {
    if (this.characterForm.valid) {
      this.formSubmit.emit(this.characterForm.value);
    }
  }
}
