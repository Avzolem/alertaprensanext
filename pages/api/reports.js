export default function handler(req, res) {
  const states = {
    state_reports: [
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },

      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Cuauhtemoc",
        description:
          "Texto de prueba 1 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Chihuahua",
        description:
          "Texto de prueba 2 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Juarez",
        description:
          "Texto de prueba 3 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Parral",
        description:
          "Texto de prueba 4 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Jimenes",
        description:
          "Texto de prueba 5 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
      {
        city: "Delicias",
        description:
          "Texto de prueba 6 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 3,
      },
      {
        city: "Camargo",
        description:
          "Texto de prueba 7 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 1,
      },
      {
        city: "Meoqui",
        description:
          "Texto de prueba 8 con bastante texto porque un reporte seguramente va a tener una cartoooooota porque no manches si me quisieran matar, yo haria lo mismo",
        level: 2,
      },
    ],
  };

  res.status(200).json(states);
}
