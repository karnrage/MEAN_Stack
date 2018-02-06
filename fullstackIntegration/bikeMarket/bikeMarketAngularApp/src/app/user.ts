import { Bike } from './bike';

export class User {
    constructor(
      // FRONT END NEEDS VALIDATION DATA, DO NOT NEED ID
      // public id: number = null,
      public first: string = "",
      public last: string = "",
      public email: string = "",
      public password: string = "",
    //   ? need confirm pass for front end, but not back end?
      public confirmPassword: string = "",    
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }