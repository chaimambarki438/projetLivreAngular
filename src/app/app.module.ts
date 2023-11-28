import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/LivresComponent';

import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParBibliothequeComponent } from './recherche-par-bibliotheque/recherche-par-bibliotheque.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeBibliothequesComponent } from './liste-bibliotheques/liste-bibliotheques.component';
import { UpdateBibliothequeComponent } from './update-bibliotheque/update-bibliotheque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    RechercheParBibliothequeComponent,
    RechercheParTitreComponent,
    SearchFilterPipe,
    ListeBibliothequesComponent,
    UpdateBibliothequeComponent,
    LoginComponent,
    ForbiddenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
   
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
    
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
