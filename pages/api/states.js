// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const states = {
    all_states: [
      { name: "Ciudad de Mexico", state_code: 9, reportes: 5 },
      { name: "Guerrero", state_code: 12, reportes: 5 },
      { name: "Estado de México", state_code: 15, reportes: 5 },
      { name: "Morelos", state_code: 17, reportes: 5 },
      { name: "Sinaloa", state_code: 25, reportes: 5 },
      { name: "Baja California", state_code: 2, reportes: 5 },
      { name: "Sonora", state_code: 26, reportes: 5 },
      { name: "Baja California Sur", state_code: 3, reportes: 5 },
      { name: "Zacatecas", state_code: 32, reportes: 5 },
      { name: "Durango", state_code: 10, reportes: 5 },
      { name: "Chihuahua", state_code: 8, reportes: 5 },
      { name: "Colima", state_code: 6, reportes: 5 },
      { name: "Nayarit", state_code: 18, reportes: 5 },
      { name: "Michoacán", state_code: 16, reportes: 5 },
      { name: "Jalisco", state_code: 14, reportes: 5 },
      { name: "Chiapas", state_code: 7, reportes: 5 },
      { name: "Tabasco", state_code: 27, reportes: 5 },
      { name: "Oaxaca", state_code: 20, reportes: 5 },
      { name: "Guanajuato", state_code: 11, reportes: 5 },
      { name: "Aguascalientes", state_code: 1, reportes: 5 },
      { name: "Querétaro", state_code: 22, reportes: 5 },
      { name: "San Luis Potosí", state_code: 24, reportes: 5 },
      { name: "Tlaxcala", state_code: 29, reportes: 5 },
      { name: "Puebla", state_code: 21, reportes: 5 },
      { name: "Hidalgo", state_code: 13, reportes: 5 },
      { name: "Veracruz", state_code: 30, reportes: 5 },
      { name: "Nuevo León", state_code: 19, reportes: 5 },
      { name: "Coahuila", state_code: 5, reportes: 5 },
      { name: "Tamaulipas", state_code: 28, reportes: 5 },
      { name: "Yucatán", state_code: 31, reportes: 5 },
      { name: "Campeche", state_code: 4, reportes: 5 },
      { name: "Quintana Roo", state_code: 23, reportes: 5 },
    ],
  };

  res.status(200).json(states);
}
