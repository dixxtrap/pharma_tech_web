import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle.model';
import { Medicaments } from '../models/medicaments';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private sanitize:DomSanitizer) { }

  public creatImages(medicaments: Medicaments) {
    const medicamentsImages: any[] = medicaments.medocImage;
    const medicamentsImagesToFilesHandle: FileHandle[] = [];
    for (let i = 0; i < medicamentsImages.length; i++) {
      const imageFileData = medicamentsImages[i];

      const imageBlob=this.dataURIToBlob(imageFileData.picByte, imageFileData.type);

      const imageFile=new File([imageBlob],imageFileData.name,{type:imageFileData.type});
      const finalFileHandle:FileHandle={
        file:imageFile,
        url:this.sanitize.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      medicamentsImagesToFilesHandle.push(finalFileHandle);
    }
    medicaments.medocImage=medicamentsImagesToFilesHandle;
    return medicaments;
  }

  public dataURIToBlob(picBytes: any, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: imageType });
    console.log(blob);
    return blob;
    
  }

}
