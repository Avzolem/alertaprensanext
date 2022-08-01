export default function handler(req, res) {
  const states = {
    all_states: [
      { name: "Ciudad de México", state_code: 9, alerts: 10 },
      { name: "Guerrero", state_code: 12, alerts: 40 },
      { name: "Estado de México", state_code: 15, alerts: 33 },
      { name: "Morelos", state_code: 17, alerts: 20 },
      { name: "Sinaloa", state_code: 25, alerts: 30 },
      { name: "Baja California", state_code: 2, alerts: 0 },
      { name: "Sonora", state_code: 26, alerts: 53 },
      { name: "Baja California Sur", state_code: 3, alerts: 34 },
      { name: "Zacatecas", state_code: 32, alerts: 15 },
      { name: "Durango", state_code: 10, alerts: 25 },
      { name: "Chihuahua", state_code: 8, alerts: 20 },
      { name: "Colima", state_code: 6, alerts: 40 },
      { name: "Nayarit", state_code: 18, alerts: 30 },
      { name: "Michoacán de Ocampo", state_code: 16, alerts: 10 },
      { name: "Jalisco", state_code: 14, alerts: 2 },
      { name: "Chiapas", state_code: 7, alerts: 70 },
      { name: "Tabasco", state_code: 27, alerts: 39 },
      { name: "Oaxaca", state_code: 20, alerts: 100 },
      { name: "Guanajuato", state_code: 11, alerts: 2 },
      { name: "Aguascalientes", state_code: 1, alerts: 27 },
      { name: "Querétaro", state_code: 22, alerts: 2 },
      { name: "San Luis Potosí", state_code: 24, alerts: 43 },
      { name: "Tlaxcala", state_code: 29, alerts: 37 },
      { name: "Puebla", state_code: 21, alerts: 9 },
      { name: "Hidalgo", state_code: 13, alerts: 25 },
      { name: "Veracruz de Ignacio de la Llave", state_code: 30, alerts: 50 },
      { name: "Nuevo León", state_code: 19, alerts: 52 },
      { name: "Coahuila de Zaragoza", state_code: 5, alerts: 54 },
      { name: "Tamaulipas", state_code: 28, alerts: 35 },
      { name: "Yucatán", state_code: 31, alerts: 15 },
      { name: "Campeche", state_code: 4, alerts: 25 },
      { name: "Quintana Roo", state_code: 23, alerts: 65 },
    ],
  };

  res.status(200).json(states);
}
