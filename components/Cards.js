export default function Nav() {
  return (
     <div>
      <div class="card w-96 bg-cyan-700 text-primary-content">
        <div class="card-body">
          <h2 class="card-title text-emerald-300">Alertas del mes</h2>
          <p>Estas son las alertas registradas</p>
          <div class="card-actions justify-end">
            <button class="btn">Consulta</button>
          </div>
        </div>
      </div>
      <br></br>
      <div class="card w-96 bg-cyan-700 text-primary-content">
        <div class="card-body">
          <h2 class="card-title text-orange-400">Alertas máximas</h2>
          <p>Estas son las alertas registradas</p>
          <div class="card-actions justify-end">
            <button class="btn">Consulta</button>
          </div>
        </div>
      </div>
    </div>
  );
}
