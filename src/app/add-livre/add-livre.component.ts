import { Bibliotheque } from './../model/bibliotheque.model';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newLivre= new Livre();
  newBibliotheque! : Bibliotheque;
  bibliotheques! : Bibliotheque[];
  newIdBib! : number;

  uploadedImage!: File;
  imagePath: any;

  constructor(private livreService: LivreService,
              private router :Router) { }

  ngOnInit(): void {
     this.livreService.listeBiblitheques().
    subscribe(cats => {this.bibliotheques = cats._embedded.bibliotheques;
    console.log(cats);
    });
  }

  addLivre(){
   // this.newBibliotheque = this.livreService.consulterBibliotheque(this.newIdBib);
    //this.newLivre.bibliotheque = this.newBibliotheque;
   
      this.newLivre.bibliotheque = this.bibliotheques.find(cat => cat.idBib == this.newIdBib)!;
      this.livreService
        .ajouterLivre(this.newLivre)
        .subscribe((prod) => {
          this.livreService
            .uploadImageFS(this.uploadedImage,
              this.uploadedImage.name, prod.idLivre!)
            .subscribe((response: any) => { }
            );
          this.router.navigate(['livres']);
        });
    }
  


//image
onImageUpload(event: any) {
  this.uploadedImage = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = (_event) => { this.imagePath = reader.result; }
  }
  
}
