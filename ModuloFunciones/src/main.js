function incrementarTurno() {
  let numeroActual = parseInt(document.getElementById("numeroturno").innerText);
  // Incrementando el valor
  document.getElementById("numeroturno").innerText = ++numeroActual;
  document.getElementById("numeroturno").innerText = `${numeroActual}`.padStart(
    2,
    "0"
  );
}
const btnSiguiente = document.getElementById("siguiente");
btnSiguiente.addEventListener("click", () => incrementarTurno());

function decrementarTurno() {
  let numeroActual = parseInt(document.getElementById("numeroturno").innerText);
  // Decrementando el valor
  document.getElementById("numeroturno").innerText = --numeroActual;
  document.getElementById("numeroturno").innerText = `${numeroActual}`.padStart(
    2,
    "0"
  );
}
const btnAnterior = document.getElementById("anterior");
btnAnterior.addEventListener("click", () => decrementarTurno());

function resteo() {
  let numeroActual = parseInt(document.getElementById("numeroturno").innerText);
  document.getElementById("numeroturno").innerText = numeroActual = 0;
  document.getElementById("numeroturno").innerText = `${numeroActual}`.padStart(
    2,
    "0"
  );
}
const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", () => resteo());

function introducirValor() {
  let valorUsuario = document.getElementById("cajatexto").value;
  document.getElementById("numeroturno").innerText = `${valorUsuario}`.padStart(
    2,
    "0"
  );
}

const btnintroValor = document.getElementById("introvalor");
btnintroValor.addEventListener("click", () => introducirValor());
