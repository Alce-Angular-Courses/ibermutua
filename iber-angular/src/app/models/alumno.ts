

export class Alumno {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public email: string = '',
        public nacim: string = '',
        public coment: string = '',
        public isOk: boolean = false,
        public turno: Turno | null = null,
        public curso: Curso | null = null,
    ) {}
}

export interface Turno {
    id: string;
    nombre: string;
    info: string;
}

export interface ICurso {
    id: string;
    nombre: string;
    info: string;
}

export class Curso implements ICurso {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public info: string= ''
    ) {}
}
