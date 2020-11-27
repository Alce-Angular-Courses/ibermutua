export class Libro {
    constructor(
        public id: string = '',
        public titulo: string = '',
        public autores: string | Array<string> = ''
    ) {}
}
