import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from  './components/list/character-list.component'
import { CharacterFormComponent } from './components/form/character-form.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
