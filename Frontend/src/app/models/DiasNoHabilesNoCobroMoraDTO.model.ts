export class DiasNoHabilesNoCobroMoraDTO{
    constructor(
        public code: number,
        public descripcion: string,
        public description:	string,
        public empresa:	string,
        public errorCore: boolean,
        public fechaFeriado: string,
        public tipoFeriado: string
    ){}
}