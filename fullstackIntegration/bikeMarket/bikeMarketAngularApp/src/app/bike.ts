import { User } from './user';

export class Bike {
    constructor(
      public id: number = null,
      public createdBy: User = null,
      public title: string = "",
      public desc: string = "",
      public price: string = "",
      public location: string = "",
      public ownerEmail: string = "",
      public ownerName: string = "",
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }