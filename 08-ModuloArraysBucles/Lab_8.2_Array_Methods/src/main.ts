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
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};
console.log("Subapartado a: ", obtenPacientesAsignadosAPediatria(pacientes));

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(
  "Subapartado b: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  pacientes.some(
    (paciente) =>
      (activarProtocolo =
        paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)
  );

  return activarProtocolo;
};
console.log(
  "Activamos el protocolo de urgencia?: ",
  activarProtocoloUrgencia(pacientes)
);

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let busquedaPacientesDePediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  let reasignaPacientesAMedicoFamilia: Pacientes[] =
    busquedaPacientesDePediatria.map((busquedaPacientesDePediatria) => ({
      ...busquedaPacientesDePediatria,
      especialidad: "Medico de familia",
    }));
  return reasignaPacientesAMedicoFamilia;
};
console.log(
  "Pacientes de la especialidad Pediatria reasignados a Medico de familia",
  reasignaPacientesAMedicoFamilia(pacientes)
);
// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa: boolean = false;
  pacientes.forEach((paciente) =>
    paciente.especialidad === "Pediatra"
      ? (pediatraACasa = false)
      : (pediatraACasa = true)
  );
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

const filtradoPorEspecialidad = (
  tipoEspecialidad: Especialidad,
  pacientes: Pacientes[]
) => {
  return pacientes.filter((paciente) => {
    return paciente.especialidad === tipoEspecialidad;
  });
};

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: filtradoPorEspecialidad("Medico de familia", pacientes)
      .length,
    pediatria: filtradoPorEspecialidad("Pediatra", pacientes).length,
    cardiologia: filtradoPorEspecialidad("Cardiólogo", pacientes).length,
  };
};

console.log(
  "Total de pacientes por especialidad: ",
  cuentaPacientesPorEspecialidad(pacientes)
);
