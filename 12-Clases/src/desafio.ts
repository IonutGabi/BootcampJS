import { Reserva, reservas } from "./modelo";

class ReservaGenerica {
  reservas: Reserva[];
  subtotal = 0;
  total = 0;
  totalIva = 0;
  IVA = 21;

  constructor(reservas: Reserva[]) {
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
    this.reservas.reduce(
      (acumulador, reserva) =>
        (this.subtotal =
          acumulador +
          reserva.noches * this.devuelvePrecio(reserva.tipoHabitacion) +
          (reserva.pax - 1) * 40),
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

class ReservaDelClienteParticular extends ReservaGenerica {
  constructor(reservas: Reserva[]) {
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

const reservaDelClienteParticular = new ReservaDelClienteParticular(reservas);
reservaDelClienteParticular.calculaSubtotal();
reservaDelClienteParticular.calculaIva();
reservaDelClienteParticular.calculaTotal();

console.log("----------------------DESAFIO------------------");

console.log(
  `Subtotal de las reservas del cliente particular: ${reservaDelClienteParticular.subtotal}`
);
console.log(
  `IVA de las reservas del cliente particular: ${reservaDelClienteParticular.totalIva}`
);
console.log(
  `Total de las reservas del cliente particular: ${reservaDelClienteParticular.total}`
);
console.log("-------------------------------------------------");

class ReservaTourOperador extends ReservaGenerica {
  descuento = 15;
  constructor(reservas: Reserva[]) {
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

  calculaDescuento() {
    this.subtotal = this.subtotal - (this.descuento * this.subtotal) / 100;
  }
}

const reservaDelTourOperador = new ReservaTourOperador(reservas);
reservaDelTourOperador.calculaSubtotal();
reservaDelTourOperador.calculaDescuento();
reservaDelTourOperador.calculaIva();
reservaDelTourOperador.calculaTotal();

console.log(
  `Subtotal de las reservas del tour operador: ${reservaDelTourOperador.subtotal}`
);
console.log(
  `IVA de las reservas del tour operador: ${reservaDelTourOperador.totalIva}`
);
console.log(
  `Total de las reservas del tour operador: ${reservaDelTourOperador.total}`
);
