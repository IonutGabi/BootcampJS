type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
// Apartado 1

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      console.log("Subapartado a:", pacientes[i]);
    }
  }
  return pacientes;
};

obtenPacientesAsignadosAPediatria(pacientes);

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      console.log("Subapartado b:", pacientes[i]);
    }
    i++;
  }
  return pacientes;
};
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i: number = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca < 100 &&
      pacientes[i].temperatura < 39
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};

console.log(
  "¿Activamos el protocolo de urgencia?: ",
  activarProtocoloUrgencia(pacientes)
);

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let i = 0;

  const copiaArrayPacientes: Pacientes[] = pacientes.slice();

  while (i < copiaArrayPacientes.length) {
    if (copiaArrayPacientes[i].especialidad === "Pediatra") {
      copiaArrayPacientes[i] = {
        ...copiaArrayPacientes[i],
        especialidad: "Medico de familia",
      };
    }
    i++;
  }
  return copiaArrayPacientes;
};

console.log(
  "Reasignando a los pacientes de pediatría al Médico de familia: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa: boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    pacientes[i].especialidad === "Pediatra"
      ? (pediatraACasa = false)
      : (pediatraACasa = true);
  }
  return pediatraACasa;
};
console.log(
  "El pediatra se puede ir a casa: ",
  HayPacientesDePediatria(pacientes)
);

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const NumeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Medico de familia") {
      NumeroPacientesPorEspecialidad.medicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      NumeroPacientesPorEspecialidad.pediatria++;
    } else {
      NumeroPacientesPorEspecialidad.cardiologia++;
    }
    i++;
  }
  return NumeroPacientesPorEspecialidad;
};

console.log(
  "Total de pacientes por cada especialidad: ",
  cuentaPacientesPorEspecialidad(pacientes)
);
