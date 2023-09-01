import { Reserva, reservas } from "./modelo";

export class ReservaClienteParticular {
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
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }

  calculaSubtotal() {
    this.subtotal = this.reservas.reduce(
      (acumulador, reserva) =>
        acumulador +
        reserva.noches * this.devuelvePrecio(reserva.tipoHabitacion) +
        (reserva.pax - 1) * 40,
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
const reservaClienteParticular = new ReservaClienteParticular(reservas);
reservaClienteParticular.calculaSubtotal();
reservaClienteParticular.calculaIva();
reservaClienteParticular.calculaTotal();
console.log(
  `Subtotal de las reservas del cliente particular: ${reservaClienteParticular.subtotal}`
);
console.log(
  `IVA de las reservas del cliente particular: ${reservaClienteParticular.totalIva}`
);
console.log(
  `Total de las reservas del cliente particular: ${reservaClienteParticular.total}`
);
