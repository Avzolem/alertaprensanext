import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Nav from "../components/Nav";
import Cards from "../components/Cards"

export default function Home() {
  const [states, setStates] = useState([]); //para guardar el arreglo de los estados que viene del API, inicia en vacio
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null); //para mostrar si hay un error trayendo informacion
  const [content, setContent] = useState(""); //para guardar el texto que va en el tooltip cuando se hace hover en un estado del mapa

  // esto se ejecuta una vez, una vez que el componente se monta
  useEffect(() => {
    //esta funcion consume el servicio del API
    const getData = async () => {
      setLoading(true); //inicia loading true

      try {
        const response = await axios.get("/api/states"); //le hace GET a el api de estados, el await no se puede utilizar si la funcion padre no tiene Async
        setStates(response.data.all_states); //actualiza el estado de react con los estados de mexico que regreso el API
      } catch (error) {
        console.log(error);
        setGlobalError("Ocurrio un error trayendo la informacion del server"); //Cachea el error
      }

      setLoading(false);
    };

    getData(); //Ejecuta el GetData
  }, []); // Se usan los [] para que se ejecute 1 sola vez el useeffect

  //todo lo que esta dentro de return en un componente de react es jsx (html)
  // checar condicionales rernarias
  return (
    <div className="bg-stone-200">
      <Nav></Nav>
      <h1 className="text-3xl text-emerald-500 font-bold underline">Observatorio digital</h1>
      {loading ? ( // ? es un if
        <p>cargando</p>
      ) : globalError ? ( // : es un else
        globalError
      ) : (
        <div>
          {states.length > 0 ? (
            <div className="states-list container">
              <Cards></Cards>
              {/* componente de mapa, se le manda la lista de estados del API, y se le manda el set de content*/}
              <Map className=""setTooltipContent={setContent} states={states} />
              <ReactTooltip backgroundColor="#f6755b" >{content}</ReactTooltip>
              {/* <ul>
                {states.map((state, index) => (
                  <li key={index}>
                    <p>Nombre: {state.name}</p>
                    <p>Reportes: {state.reportes} </p>
                  </li>
                ))}
              </ul> */}
            </div>
          ) : (
            <p>No hay estados</p>
          )}
        </div>
      )}
    </div>
  );
}
