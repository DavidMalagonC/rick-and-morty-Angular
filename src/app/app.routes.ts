import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./slices/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
];
