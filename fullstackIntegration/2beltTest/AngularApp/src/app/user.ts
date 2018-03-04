// import { Bike } from './bike'; 
// to create relationship above

export class User {
    constructor(
      public first: string = "",
      public last: string = "",
      public email: string = "",
      public password: string = "",
      public confirmPassword: string = "",    
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }