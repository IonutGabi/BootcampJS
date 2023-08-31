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
}

class ReservaClienteHabitual extends ReservaGenerica {
  constructor(reservas: ReservaAdicional[]) {
    super(reservas);
  }

  devuelvePrecio(reservas: ReservaAdicional): number {
    switch (reservas.tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  }

  calculaSubtotal(): number {
    return this.reservas.reduce((acumulador, reserva) => {
      return reserva.desayuno === true
        ? (this.subtotal =
            acumulador +
            reserva.pax * reserva.noches * 15 * this.devuelvePrecio(reserva) +
            (reserva.pax - 1) * 40)
        : (this.subtotal = 0);
    }, 0);
  }
  calculaIva(): number {
    return (this.totalIva = (this.IVA * this.subtotal) / 100);
  }

  calculaTotal(): number {
    return (this.total = this.subtotal + this.totalIva);
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

  calculaSubtotal(): number {
    return this.reservas.reduce((acumulador, reserva) => {
      return reserva.desayuno === true
        ? (this.subtotal =
            acumulador +
            reserva.pax *
              reserva.noches *
              15 *
              this.devuelvePrecio(reserva.tipoHabitacion) +
            (reserva.pax - 1) * 40)
        : (this.subtotal = 0);
    }, 0);
  }

  calculaDecuento(): number {
    return (this.subtotal =
      this.subtotal - (this.descuento * this.subtotal) / 100);
  }
  calculaIva(): number {
    return (this.totalIva = (this.IVA * this.subtotal) / 100);
  }

  calculaTotal(): number {
    return (this.total = this.subtotal + this.IVA);
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
