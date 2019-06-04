import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing";

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; //se importa solo cuando se crea un componente
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AlmacenadorasComponent } from './components/almacenadoras/almacenadoras.component';
import { AgrupacionDeCodigoComponent } from './components/agrupacion-de-codigo/agrupacion-de-codigo.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { UbicacionGarantiaComponent } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { OrigenFondosComponent } from './components/origen-fondos/origen-fondos.component';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { CategoriasSIBComponent } from './components/categorias-sib/categorias-sib.component';
import { EstatusGarantiasRealesComponent } from './components/estatus-garantias-reales/estatus-garantias-reales.component';
import { EstatusAvaluosComponent } from './components/estatus-avaluos/estatus-avaluos.component';
import { IngenierosValuadoresComponent } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { NotariosComponent } from './components/notarios/notarios.component';
import { MotivosAjustesComponent } from './components/motivos-ajustes/motivos-ajustes.component';
import { DiasInhabilesComponent } from './components/dias-inhabiles/dias-inhabiles.component';
import { CobrosAdicionalesComponent } from './components/cobros-adicionales/cobros-adicionales.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { MotivosReversaComponent } from './components/motivos-reversa/motivos-reversa.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MediosContactoComponent } from './components/medios-contacto/medios-contacto.component';
import { CanalesVentaComponent } from './components/canales-venta/canales-venta.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { RelacionesTransaccionesComponent } from './components/relaciones-transacciones/relaciones-transacciones.component';
import { TransaccionesDepositosComponent } from './components/transacciones-depositos/transacciones-depositos.component';
import { AcercamientosComponent } from './components/acercamientos/acercamientos.component';
import { AsesoresDePrestamosComponent } from './components/asesores-de-prestamos/asesores-de-prestamos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { TipoDeduccionComponent } from './components/tipo-deduccion/tipo-deduccion.component';
import { TipoPrestamoComponent } from './components/tipo-prestamo/tipo-prestamo.component';
import { TiposTransaccionComponent } from './components/tipos-transaccion/tipos-transaccion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LimpiezaArchivosComponent } from './components/limpieza-archivos/limpieza-archivos.component';
import { SubProductosComponent } from './components/sub-productos/sub-productos.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ParametrosAdicionalesaComponent } from './components/parametros-adicionalesa/parametros-adicionalesa.component';
import { EnventosSolicitudesComponent } from './components/enventos-solicitudes/enventos-solicitudes.component';
import { DocPrestarProductosComponent } from './components/doc-prestar-productos/doc-prestar-productos.component';
import { MontosPlazoComponent } from './components/montos-plazo/montos-plazo.component';
import { PorcentajesFinanciamientoComponent } from './components/porcentajes-financiamiento/porcentajes-financiamiento.component';
import { RangoPlazosInteresComponent } from './components/rango-plazos-interes/rango-plazos-interes.component';
import { CategoriasUsuariosComponent } from './components/categorias-usuarios/categorias-usuarios.component';
import { AsignacionCategoriasComponent } from './components/asignacion-categorias/asignacion-categorias.component';
import { EstatusLegalesComponent } from './components/estatus-legales/estatus-legales.component';
import { ParametrosProductosComponent } from './components/parametros-productos/parametros-productos.component';
import { EnlaceContabilidadComponent } from './components/enlace-contabilidad/enlace-contabilidad.component';
import { MantenimientoContabilizacionComponent } from './components/mantenimiento-contabilizacion/mantenimiento-contabilizacion.component';
import { ParametrizacionNumeroPrestamosComponent } from './components/parametrizacion-numero-prestamos/parametrizacion-numero-prestamos.component';
import { PasosCierreComponent } from './components/pasos-cierre/pasos-cierre.component';
import { ArchivosLimpiezaComponent } from './components/archivos-limpieza/archivos-limpieza.component';
import { ContenidosContablesComponent } from './components/contenidos-contables/contenidos-contables.component';
import { NivelesContabilizacionComponent } from './components/niveles-contabilizacion/niveles-contabilizacion.component';
import { PoderComponent } from './components/poder/poder.component';

import { HttpClient } from 'selenium-webdriver/http'; //Preguntar
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Pipes*/
import { SearchNotariosPipe } from "./pipes/searchNotarios.pipe";
import { SearchMotAjustePipe } from "./pipes/searchMotAjuste.pipe";
import { SearchSupervisorPipe } from "./pipes/searchSupervisor.pipe";
import { SearchEstAvaluoPipe } from "./pipes/searchEstAvaluo.pipe";
import { searchAlmacenadora } from "./pipes/searchAlmacenadora.pipe";
import { searchAgrupacionCreditos } from "./pipes/searchAgrupacionCreditos.pipe";
import { searchAseguradora } from "./pipes/searchAseguradora.pipe";
import { searchLugaresInversion } from "./pipes/searchLugaresInversion.pipe";
import { SearchOrigenFondoPipe } from "./pipes/searchOrigenFondos.pipe";
import { searchFormaPago } from "./pipes/searchFormaPago.pipe";
import { searchDestino } from "./pipes/searchDestinos.pipe";
import { searchCategoriaSIB } from "./pipes/searchCategoriaSIB.pipe";
import { searchStatusGarantiaReal } from "./pipes/searchStatusGarantiaReal.pipe";
import { searchFormaDesembolso } from "./pipes/searchFormaDesembolso.pipe";
import { SearchMotReserva } from "./pipes/searchMotivosReserva.pipe";
import { searchMedio } from "./pipes/searchMedio.pipe";
import { searchDiasInhabiles } from "./pipes/searchDiasInhabiles.pipe";
import { searchPoderPipe } from "./pipes/searchPoder.pipe";
import { InstanciaComponent } from './components/instancia/instancia.component';
import { searchInstancia } from './pipes/searchInstancia.pipe';
import { searchInstitucionesCobros } from './pipes/searchInstitucionesCobros.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //se importa solo cuando se crea un componente
    AseguradorasComponent,
    AlmacenadorasComponent,
    AgrupacionDeCodigoComponent,
    LugaresInversionComponent,
    UbicacionGarantiaComponent,
    OrigenFondosComponent,
    FormaPagoComponent,
    DestinosComponent,
    CategoriasSIBComponent,
    EstatusGarantiasRealesComponent,
    EstatusAvaluosComponent,
    IngenierosValuadoresComponent,
    NotariosComponent,
    MotivosAjustesComponent,
    DiasInhabilesComponent,
    CobrosAdicionalesComponent,
    InstitucionesCobrosAdicionalesComponent,
    MotivosReversaComponent,
    FormasDesembolsoComponent,
    MotivosReferenciasClientesComponent,
    MediosContactoComponent,
    CanalesVentaComponent,
    BancosComponent,
    RelacionesTransaccionesComponent,
    TransaccionesDepositosComponent,
    AcercamientosComponent,
    AsesoresDePrestamosComponent,
    SidenavComponent,
    DatosGeneralesComponent,
    TipoDeduccionComponent,
    TipoPrestamoComponent,
    TiposTransaccionComponent,
    GarantiasContablesComponent,
    FrecuenciasAmortizacionComponent,
    ProductosComponent,
    LimpiezaArchivosComponent,
    SubProductosComponent,
    ConsultasComponent,
    ClasificacionComponent,
    ParametrosAdicionalesaComponent,
    EnventosSolicitudesComponent,
    DocPrestarProductosComponent,
    MontosPlazoComponent,
    PorcentajesFinanciamientoComponent,
    RangoPlazosInteresComponent,
    CategoriasUsuariosComponent,
    AsignacionCategoriasComponent,
    EstatusLegalesComponent,
    ParametrosProductosComponent,
    EnlaceContabilidadComponent,
    MantenimientoContabilizacionComponent,
    ParametrizacionNumeroPrestamosComponent,
    PasosCierreComponent,
    ArchivosLimpiezaComponent,
    ContenidosContablesComponent,
    NivelesContabilizacionComponent,
    PoderComponent,
    SearchNotariosPipe,
    SearchMotAjustePipe,
    SearchSupervisorPipe,
    SearchEstAvaluoPipe,
    searchAlmacenadora,
    searchAgrupacionCreditos,
    searchAseguradora,
    searchLugaresInversion, 
    SearchOrigenFondoPipe,
    searchFormaPago,
    searchDestino,
    searchCategoriaSIB,
    searchStatusGarantiaReal,
    searchFormaDesembolso,
    SearchMotReserva,
    searchMedio,
    searchDiasInhabiles,
    searchPoderPipe,
    searchInstancia,
    searchInstitucionesCobros,
    InstanciaComponent,        
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    routing,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
