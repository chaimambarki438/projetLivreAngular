import { LivreService } from './../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';



@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres?: Livre[];
  apiurl:string='http://localhost:8085/livres/api';

  constructor(private livreService: LivreService,
              public authService: AuthService) {

    //this.livres = this.livreService.listeLivres();
  }



  ngOnInit(): void {
   /* this.livreService.listeLivres().subscribe(prods => {
      console.log(prods);
      this.livres = prods;
      });
*/
     this.chargerLivres();

  }


  chargerLivres(){
    this.livreService.listeLivres().subscribe(prods => {
    this.livres = prods;
/*
    this.livres.forEach((prod) => {
      this.livreService
      .loadImage(prod.image.idImage)
      .subscribe((img: Image) => {
      prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
      });
      }); */
    }); 
    }

    



  supprimerLivre(l: Livre)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.livreService.supprimerLivre(l.idLivre!).subscribe(() => {
    console.log("livre supprimé");
    this.chargerLivres();
    });
  }
}
