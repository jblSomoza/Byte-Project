export class CobrosAdicionalesDTO{
    constructor(
        public acumulaPeriodos: string,
        public asociaSeguros:string,
        public calculoFlatAlVencimiento:string,
        public  code:number,
        public codigo:string,
        public descripcion:string,
        public descripcionCorta:string,
        public  description:string,
        public empresa:string,
        public errorCore:boolean,
        public formatoImpresion:string,
        public inclusionComprobada:string,
        public incluyeCalculoInteres:string,
        public  incluyeCalculoMora:string,
        public incluyeEnCapital:string,
        public opcionAcompra:string,
        public pagosAterceros:string,
        public paraCalculoDeMora:string,
        public polizaColectiva:string,
        public provisiona:string,
        public repPagoTercero:string,
        public seUsaEnFianza:string,
        public utilizaCodeudor:string,
        public utilizaFactorDivisorParaCalculoFlat:string
     
    ){}
}

