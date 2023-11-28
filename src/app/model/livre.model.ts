import { Bibliotheque } from './bibliotheque.model';
import { Image } from "./image.model";
export class Livre {
    idLivre? : number;
    titreLivre? : string;
    prixLivre? : number;
     dateOuverture? : Date ;
     bibliotheque! : Bibliotheque;
     images!: Image[];
     imageStr!:string;


    }
    