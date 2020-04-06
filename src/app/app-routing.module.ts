import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/authGuard.service';

const routes: Routes = [
  {
    path: 'membre',
    children: [
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      }
    ]
  },
  {
    path: 'public',
    children: [
      {
        path: 'connexion',
        loadChildren: () => import('./public/connexion/connexion.module').then(m => m.ConnexionPageModule)
      },
      {
        path: 'inscription',
        loadChildren: () => import('./public/inscription/inscription.module').then(m => m.InscriptionPageModule)
      },
      {
        path: '',
        redirectTo: 'connexion',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
