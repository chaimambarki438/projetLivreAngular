import { Bibliotheque } from './../model/bibliotheque.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-update-bibliotheque',
  templateUrl: './update-bibliotheque.component.html',
  styles: [
  ]
})
export class UpdateBibliothequeComponent implements OnInit {
 

  @Input()
  bibliotheque! : Bibliotheque;

  @Output() 
  bibliothequeUpdated = new EventEmitter<Bibliotheque>();

  @Input()
ajout!:boolean;

  constructor() { }

  ngOnInit(): void {
   
    }
    
    saveBibliotheque(){
      this.bibliothequeUpdated.emit(this.bibliotheque);
      }  

}
