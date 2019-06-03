import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AlmacenadorasComponent } from './components/almacenadoras/almacenadoras.component';
import { AgrupacionDeCodigoComponent } from './components/agrupacion-de-codigo/agrupacion-de-codigo.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { UbicacionGarantiaComponent } from './components/ubicacion-garantia/ubicacion-garantia.component'; //solo se importa luedo de declarar el path
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
import { RelacionesTransaccionesComponent } from './components/relaciones-transacciones/relaciones-transacciones.component';
import { TransaccionesDepositosComponent } from './components/transacciones-depositos/transacciones-depositos.component';
import { AcercamientosComponent } from './components/acercamientos/acercamientos.component';
import { AsesoresDePrestamosComponent } from './components/asesores-de-prestamos/asesores-de-prestamos.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { TipoDeduccionComponent } from './components/tipo-deduccion/tipo-deduccion.component';
import { BancosComponent } from './components/bancos/bancos.component'
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


const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent /* Es el nombre del la clase del module*/}, 
    {path: 'aseguradoras', component: AseguradorasComponent},
    {path: 'almacenadoras', component: AlmacenadorasComponent},
    {path: 'agrupacion-codigos', component: AgrupacionDeCodigoComponent},
    {path: 'lugar-invercion', component: LugaresInversionComponent},
    {path: 'ubicacion-garantia', component: UbicacionGarantiaComponent},
    {path: 'origen-fondos', component: OrigenFondosComponent},
    {path: 'formas-pago', component: FormaPagoComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: 'categorias-SIB', component: CategoriasSIBComponent},
    {path: 'estatus-garantiasReales', component: EstatusGarantiasRealesComponent},
    {path: 'estatus-avaluos', component: EstatusAvaluosComponent},
    {path: 'ingenieros-valuadores', component: IngenierosValuadoresComponent},
    {path: 'notarios', component: NotariosComponent},
    {path: 'motivos-ajustes', component: MotivosAjustesComponent},
    {path: 'dias-inhabiles', component: DiasInhabilesComponent},
    {path: 'cobros-adicionales', component: CobrosAdicionalesComponent},
    {path: 'instituciones-cobros-adicionales', component: InstitucionesCobrosAdicionalesComponent},
    {path: 'motivos-reversa', component: MotivosReversaComponent},
    {path: 'formas-desembolso', component: FormasDesembolsoComponent},
    {path: 'motivos-referencias-clientes', component: MotivosReferenciasClientesComponent},
    {path: 'medios-contacto', component: MediosContactoComponent},
    {path: 'canales-venta', component: CanalesVentaComponent},
    {path: 'bancos', component: BancosComponent},
    {path: 'relaciones-transacciones', component: RelacionesTransaccionesComponent},
    {path: 'transacciones-deposito', component: TransaccionesDepositosComponent},
    {path: 'acercamientos', component: AcercamientosComponent},
    {path: 'asesores-de-prestamos', component: AsesoresDePrestamosComponent},
    {path: 'datos-generales', component: DatosGeneralesComponent},
    {path: 'tipos-deducciones', component: TipoDeduccionComponent},
    {path: 'tipo-prestamos', component: TipoPrestamoComponent},
    {path: 'tipo-transaccion', component: TiposTransaccionComponent},
    {path: 'garantias-contables', component: GarantiasContablesComponent},
    {path: 'frecuencias-amortizacion', component: FrecuenciasAmortizacionComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'limpieza', component: LimpiezaArchivosComponent},
    {path: 'subProductos', component: SubProductosComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: 'clasificacion', component: ClasificacionComponent},
    {path: 'parametros-adicionales', component: ParametrosAdicionalesaComponent},
    {path: 'eventos-solicitudes', component: EnventosSolicitudesComponent},
    {path: 'doc-prestar-productos', component: DocPrestarProductosComponent},
    {path: 'montos-plazo', component: MontosPlazoComponent},
    {path: 'porcentajes-financiamiento', component: PorcentajesFinanciamientoComponent},
    {path: 'rango-plazos-interes', component: RangoPlazosInteresComponent},
    {path: 'categorias-usuarios', component: CategoriasUsuariosComponent},
    {path: 'asignacion-categorias', component: AsignacionCategoriasComponent},
    {path: 'estatus-legales', component: EstatusLegalesComponent},
    {path: 'parametros-productos', component: ParametrosProductosComponent},
    {path: 'enlace-contabilidad', component: EnlaceContabilidadComponent},
    {path: 'mantenimiento-contabilizacion', component: MantenimientoContabilizacionComponent},
    {path: 'parametrizacion-numero-prestamos', component: ParametrizacionNumeroPrestamosComponent},
    {path: 'pasos-cierre', component: PasosCierreComponent},
    {path: 'archivos-limpieza', component: ArchivosLimpiezaComponent},
    {path: 'contenidos-contables', component: ContenidosContablesComponent},
    {path: 'niveles-contabilizacion', component: NivelesContabilizacionComponent},
];

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)