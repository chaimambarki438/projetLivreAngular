import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Bibliotheque } from '../model/bibliotheque.model';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styles: [
  ]
})
export class RechercheParTitreComponent implements OnInit {
  livres! : Livre[];
  titreLivre! : string;
  bibliotheques! : Bibliotheque[];
  searchTerm !: string;
  allLivres!:Livre[];
  constructor(private livreService : LivreService) { }

  ngOnInit(): void {
  this.livreService.listeLivres().subscribe(prods => {
      console.log(prods);
      this.allLivres= prods;
      });
    
  }

  rechercherLivre(){
    this.livreService.rechercherParTitre(this.titreLivre).
    subscribe(prods => {
    this.livres = prods; 
    console.log(prods)});
    }

   onKeyUp(filterText : string){
  
      this.livres = this.allLivres.filter(item =>
      item.titreLivre!.toLowerCase().includes(filterText));
   
      }
        
}
