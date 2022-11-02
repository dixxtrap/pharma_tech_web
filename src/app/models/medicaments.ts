import { FileHandle } from "./file-handle.model";
import { Pharmacie } from "./pharmacie";

export interface Medicaments{
     idMedic:number,
     nomMedica:string,
     dateCreationMedoc:Date;
     medocImage:FileHandle[],
     pharmacie:Pharmacie[];
}