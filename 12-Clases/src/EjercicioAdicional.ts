import { ReservaAdicional, reservasAdicionales } from "./modelo";

class ReservaGenerica {
  reservas: ReservaAdicional[];
  subtotal = 0;
  totalIva = 0;
  IVA = 21;
  total = 0;

  constructor(reservas: ReservaAdicional[]) {
    this.reservas = reservas;
  }

  devuelvePrecio(tipoHabitacion: string): number {
    switch (tipoHabitacion) {
      case "standard":
        return 0;
      case "suite":
        return 0;
      default:
        return 0;
    }
  }

  calculaSubtotal() {
    this.subtotal =
      this.reservas.reduce(
        (acumulador, reserva) =>
          acumulador +
          reserva.noches * this.devuelvePrecio(reserva.tipoHabitacion) +
          (reserva.pax - 1) * 40,
        0
      ) + this.calculaPrecioAdcional(this.reservas);
  }

  calculaPrecioAdcional(reservas: ReservaAdicional[]): number {
    return reservas.reduce(
      (acumulador, reserva) =>
        (acumulador += reserva.desayuno
          ? reserva.noches * reserva.pax * 15
          : 0),
      0
    );
  }
  calculaIva() {
    this.totalIva = (this.IVA * this.subtotal) / 100;
  }

  calculaTotal() {
    this.total = this.subtotal + this.totalIva;
  }
}

class ReservaClienteHabitual extends ReservaGenerica {
  constructor(reservas: ReservaAdicional[]) {
    super(reservas);
  }

  devuelvePrecio(tipoHabitacion: string): number {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }
}

const reservaClienteHabitual = new ReservaClienteHabitual(reservasAdicionales);
reservaClienteHabitual.calculaSubtotal();
reservaClienteHabitual.calculaIva();
reservaClienteHabitual.calculaTotal();

console.log("-------------------Ejercicio Adicional-------------------");
console.log(
  `Subtotal de las reservas del cliente habitual: ${reservaClienteHabitual.subtotal}`
);
console.log(
  `IVA de las reservas del cliente habitual: ${reservaClienteHabitual.totalIva}`
);
console.log(
  `Total de las reservas del cliente habitual: ${reservaClienteHabitual.total}`
);

class ReservaTourOperador extends ReservaGenerica {
  descuento = 15;
  constructor(reservas: ReservaAdicional[]) {
    super(reservas);
  }

  devuelvePrecio(tipoHabitacion: string): number {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 100;
      default:
        return 0;
    }
  }

  calculaDecuento() {
    this.subtotal = this.subtotal - (this.descuento * this.subtotal) / 100;
  }
}

const reservaTourOperador = new ReservaTourOperador(reservasAdicionales);
reservaTourOperador.calculaSubtotal();
reservaTourOperador.calculaDecuento();
reservaTourOperador.calculaIva();
reservaTourOperador.calculaTotal();

console.log("--------------------------------------------------");
console.log(
  `Subtotal de las reservas del tour operador: ${reservaTourOperador.subtotal}`
);
console.log(
  `IVA de las reservas del tour operador: ${reservaTourOperador.totalIva}`
);
console.log(
  `Total de las reservas del tour operador: ${reservaTourOperador.total}`
);
