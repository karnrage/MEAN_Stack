export class Player {
    constructor(
      public id: number = null,
      public name: string = "",
      public position: string = "",
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }