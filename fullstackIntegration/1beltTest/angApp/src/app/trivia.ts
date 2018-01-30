import { User } from './user'; 

export class Trivia {
    constructor(
        public question: string = '',
        public answer: string = '',
        public fakeAnswer1: string = '',
        public fakeAnswer2: string = '',
    ) {}
}