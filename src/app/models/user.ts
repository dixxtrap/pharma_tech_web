
export class User {
    constructor(
      public idUser?: string,
      public prenom?: string,
      public nom?: string,
      public username?: string,
      public password?: string,
      public activated?: boolean,
      public authorities?: [],
      public roles?:string[],
    ){}
    }