import { ReservaClienteParticular } from "./caso1";
import { Reserva, reservas } from "./modelo";

class ReservaTourOperador extends ReservaClienteParticular {
  descuento = 15;
  constructor(reservas: Reserva[]) {
    super(reservas);
  }

  devuelvePrecio(reservas: Reserva): number {
    switch (reservas.tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 100;
    }
  }
  calculaDescuento(): number {
    return this.subtotal - (this.descuento * this.subtotal) / 100;
  }
}

const reservaTourOperador = new ReservaTourOperador(reservas);
reservaTourOperador.calculaSubtotal();
reservaTourOperador.calculaDescuento();
reservaTourOperador.calculaIva();
reservaTourOperador.calculaTotal();
console.log(
  `Subtotal de la reservas del tour operador: ${reservaTourOperador.subtotal}`
);
console.log(
  `IVA de las reservas del tour operador: ${reservaTourOperador.totalIva}`
);
console.log(
  `Total de las reservas del tour operador: ${reservaTourOperador.total}`
);
