import { FileHandle } from "./file-handle.model";

export interface Pharmacie {
    idPharm?: number,
      localite?: string,
      nomPharm?: string,
      pharmacieImages?:FileHandle[],
   }