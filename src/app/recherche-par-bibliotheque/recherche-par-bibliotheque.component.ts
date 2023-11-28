import { LivreService } from './../services/livre.service';
import { Livre } from '../model/livre.model';
import { Bibliotheque } from './../model/bibliotheque.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-bibliotheque',
  templateUrl: './recherche-par-bibliotheque.component.html',
  styles: [
  ]
})
export class RechercheParBibliothequeComponent implements OnInit {
  livres! : Livre[];
  IdBibliotheque! : number;
  bibliotheques! : Bibliotheque[];
  
  constructor(private livreService : LivreService) { }

  ngOnInit(): void {
    this.livreService.listeBiblitheques().
subscribe(cats => {this.bibliotheques = cats._embedded.bibliotheques;
console.log(cats);
});
  }

  onChange() {
    this.livreService.rechercherParBibliotheque(this.IdBibliotheque).
    subscribe(prods =>{this.livres=prods});
    }
}
