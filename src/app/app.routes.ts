import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SomeTabs } from './pages/some-tabs/some-tabs';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'some-tabs/:id', component: SomeTabs },
  { path: '**', redirectTo: 'home' }
];

