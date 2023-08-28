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

  devuelvePrecio(reservas: Reserva): number {
    switch (reservas.tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  }

  calculaSubtotal(): number {
    return this.reservas.reduce(
      (acumulador, reserva) =>
        (this.subtotal =
          acumulador +
          reserva.noches * this.devuelvePrecio(reserva) +
          (reserva.pax - 1 * 40)),
      0
    );
  }

  calculaIva(): number {
    return (this.totalIva = (this.IVA * this.subtotal) / 100);
  }

  calculaTotal(): number {
    return (this.total = this.subtotal + this.totalIva);
  }
}
const reservaClienteParticular = new ReservaClienteParticular(reservas);
reservaClienteParticular.calculaSubtotal();
reservaClienteParticular.calculaIva();
reservaClienteParticular.calculaTotal();
console.log(`Subtotal de las reservas: ${reservaClienteParticular.subtotal}`);
console.log(`Iva de las reservas: ${reservaClienteParticular.totalIva}`);
console.log(`Total de las reservas: ${reservaClienteParticular.total}`);
