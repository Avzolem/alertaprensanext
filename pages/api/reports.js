export default function handler(req, res) {
  const states = {
    state_reports: [
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
        id: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
        id: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
        id: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
        id: 4,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
        id: 5,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
        id: 6,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
        id: 7,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
        id: 8,
      },
    ],
  };

  res.status(200).json(states);
}
