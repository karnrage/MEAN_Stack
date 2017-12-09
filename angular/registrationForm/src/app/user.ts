export class User {
    constructor(
        public id: number = null,
        public first_name: string = "",
        public last_name: string = "",
        public email: string = "",
        public password: string = ""
        // below needed?
        public confirm: string = "",
        public address: string = "",
        public unit: string = "",
        public city: string = "",
        public state: string = "",
        // public lucky: what data type is radio button?
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
      ){}
}
