export class Note {
    constructor(
      public id: number = null,
      public text: string = "",
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }