import { Reserva, reservas } from "./modelo";

class ReservaClienteParticular {
  reservas: Reserva[];
  subtotal = 0;
  total = 0;
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
          this.devuelvePrecio(reserva) * reserva.pax * reserva.noches +
          (reserva.pax - 1 * 40)),
      0
    );
  }

  calculaTotal() {
    this.total = this.IVA + (this.IVA * this.subtotal) / 100;
  }
}
const reservaClienteParticular = new ReservaClienteParticular(reservas);
reservaClienteParticular.calculaSubtotal();
reservaClienteParticular.calculaTotal();
console.log(reservaClienteParticular);
