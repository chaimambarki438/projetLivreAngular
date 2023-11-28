import { Bibliotheque } from '../model/bibliotheque.model';
import { LivreService } from '../services/livre.service';
import { BibliothequeWrapper } from './../model/bibliothequeWrapped.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-bibliotheques',
  templateUrl: './liste-bibliotheques.component.html',
  styles: [
  ]
})
export class ListeBibliothequesComponent implements OnInit {

  bibliotheques! : Bibliotheque[];
  updatedBib:Bibliotheque = {"idBib":0,"nomBib":""};
  ajout:boolean=true;
  
  constructor(private livreService : LivreService) { }

  ngOnInit(): void {
    this.chargerBibliotheque();
  }



  bibliothequeUpdated(bib:Bibliotheque){
    console.log("Bib updated event",bib);
    this.livreService.ajouterBibliotheque(bib).
     subscribe( ()=> this.chargerBibliotheque());
    }  


    chargerBibliotheque(){
      this.livreService.listeBiblitheques().
      subscribe(cats => {this.bibliotheques = cats._embedded.bibliotheques;
      console.log(cats);
      
      });
      }


  updateBib(bib:Bibliotheque) {
        this.updatedBib=bib;
        this.ajout=false; 
        }
  
  // supprimerBibliotheque(bib: Bibliotheque) {
  //         let conf = confirm("Etes-vous sûr ?");
  //            if (conf)
  //            {
  //              this.livreService.supprimerLivre(bib.idBib!).subscribe(() => {
  //               console.log("Bibliotheque supprimée");
  //               this.chargerBibliotheque(); }  );
  //            }
  //        }
        
         
   
        }
