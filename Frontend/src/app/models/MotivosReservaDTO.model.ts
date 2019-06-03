export class MotivosReservaDTO {
    constructor(
        public cobroAdicional: String,
        public code: Number,
        public codigo: Number,
        public descripcion: String,
        public description: String,
        public empresa: String,
        public errorCore: Boolean,
        public institucion: Number,
        public referencia1: String,
        public referencia2: String,
        public referencia3: String,
        public tipoRetencion: String
    ) { }
}