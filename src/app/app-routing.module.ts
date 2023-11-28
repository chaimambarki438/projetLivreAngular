import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/LivresComponent';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { RechercheParBibliothequeComponent } from './recherche-par-bibliotheque/recherche-par-bibliotheque.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { ListeBibliothequesComponent } from './liste-bibliotheques/liste-bibliotheques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LivreGuard } from './livre.guard';

const routes: Routes = [
  {path: "livres", component : LivresComponent},
  {path: "add-livre", component : AddLivreComponent,canActivate:[LivreGuard]},
  {path: "updateLivre/:id", component: UpdateLivreComponent},
  {path: "rechercheParBibliotheque", component : RechercheParBibliothequeComponent},
  {path: "rechercheParTitre", component :RechercheParTitreComponent },
  {path: "listeBibliotheques", component : ListeBibliothequesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "livres", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
