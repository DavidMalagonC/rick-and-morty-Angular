import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './components/list/character-list.component';
import { CharacterFormComponent } from './components/form/character-form.component';
import { CharacterDeleteModalComponent } from './components/delete-modal/character-delete-modal.component';
import { CharacterEditModalComponent } from './components/edit-modal/character-edit-modal.component';
import { CharacterCreateModalComponent } from './components/create-modal/character-create-modal.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterFormComponent,
    CharacterDeleteModalComponent,
    CharacterEditModalComponent,
    CharacterCreateModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule {}
