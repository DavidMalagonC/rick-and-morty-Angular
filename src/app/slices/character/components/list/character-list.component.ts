import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  pagination = { count: 0, pages: 0, next: null as number | null };
  selectedCharacter: Character | null = null;
  isEditModalOpen = false;
  isDeleteModalOpen = false;
  isCreateModalOpen = false;

  filters = {
    name: '',
    status: undefined as 'Alive' | 'Dead' | 'unknown' | undefined,
    species: '',
    type: '',
    gender: undefined as 'Female' | 'Male' | 'Genderless' | 'unknown' | undefined
  };

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  get hasNextPage(): boolean {
    return this.pagination.next !== null;
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService
      .getCharacters(
        this.currentPage,
        this.filters.name || undefined,
        this.filters.status,
        this.filters.species || undefined,
        this.filters.type || undefined,
        this.filters.gender
      )
      .subscribe(
        ({ characters, pagination }) => {
          this.characters = characters;
          this.pagination = pagination;
        },
        (error: any) => console.error('Error fetching characters', error)
      );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }

  openEditModal(character: Character): void {
    this.selectedCharacter = { ...character };
    this.isEditModalOpen = true;
  }

  openCreateModal(): void {
    this.isCreateModalOpen = true;
  }

  closeCreateModal(): void {
    this.isCreateModalOpen = false;
  }

  saveCharacter(updatedCharacter: Character): void {
    this.characterService.updateCharacter(updatedCharacter.id, updatedCharacter).subscribe(
      () => {
        this.loadCharacters();
        this.isEditModalOpen = false;
      },
      (error) => console.error('Error updating character', error)
    );
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  openDeleteModal(character: Character): void {
    this.selectedCharacter = character;
    this.isDeleteModalOpen = true;
  }

  confirmDelete(): void {
    if (this.selectedCharacter) {
      this.characterService.deleteCharacter(this.selectedCharacter.id).subscribe(
        () => {
          this.loadCharacters();
          this.isDeleteModalOpen = false;
        },
        (error) => console.error('Error deleting character', error)
      );
    }
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  handleCharacterCreated(character: Character): void {
    this.characters = [character, ...this.characters];
    this.isCreateModalOpen = false;
  }

}
