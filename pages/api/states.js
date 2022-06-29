export default function handler(req, res) {
  const states = {
    all_states: [
      { name: "Ciudad de Mexico", state_code: 9, reports: 100 },
      { name: "Guerrero", state_code: 12, reports: 50 },
      { name: "Estado de México", state_code: 15, reports: 53 },
      { name: "Morelos", state_code: 17, reports: 2 },
      { name: "Sinaloa", state_code: 25, reports: 0 },
      { name: "Baja California", state_code: 2, reports: 80 },
      { name: "Sonora", state_code: 26, reports: 35 },
      { name: "Baja California Sur", state_code: 3, reports: 23 },
      { name: "Zacatecas", state_code: 32, reports: 105 },
      { name: "Durango", state_code: 10, reports: 52 },
      { name: "Chihuahua", state_code: 8, reports: 200 },
      { name: "Colima", state_code: 6, reports: 54 },
      { name: "Nayarit", state_code: 18, reports: 53 },
      { name: "Michoacán", state_code: 16, reports: 2 },
      { name: "Jalisco", state_code: 14, reports: 200 },
      { name: "Chiapas", state_code: 7, reports: 7 },
      { name: "Tabasco", state_code: 27, reports: 9 },
      { name: "Oaxaca", state_code: 20, reports: 10 },
      { name: "Guanajuato", state_code: 11, reports: 20 },
      { name: "Aguascalientes", state_code: 1, reports: 21 },
      { name: "Querétaro", state_code: 22, reports: 22 },
      { name: "San Luis Potosí", state_code: 24, reports: 34 },
      { name: "Tlaxcala", state_code: 29, reports: 36 },
      { name: "Puebla", state_code: 21, reports: 90 },
      { name: "Hidalgo", state_code: 13, reports: 52 },
      { name: "Veracruz", state_code: 30, reports: 5 },
      { name: "Nuevo León", state_code: 19, reports: 5 },
      { name: "Coahuila", state_code: 5, reports: 5 },
      { name: "Tamaulipas", state_code: 28, reports: 5 },
      { name: "Yucatán", state_code: 31, reports: 5 },
      { name: "Campeche", state_code: 4, reports: 5 },
      { name: "Quintana Roo", state_code: 23, reports: 5 },
    ],
  };

  res.status(200).json(states);
}
