import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Nav from "../components/Nav";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";

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

        const responseStates = response.data.all_states;
        //gets minimum and maximum of reportes of states
        const minValue = Math.min(
          ...responseStates.map((state) => state.reportes)
        );
        const maxValue = Math.max(
          ...responseStates.map((state) => state.reportes)
        );

        const parsedStates = responseStates.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity =
            (state.reportes - minValue) / (maxValue - minValue);
          newState.url = `/estados/${state.state_code}`;
          return newState;
        });

        setStates(parsedStates); //actualiza el estado de react con los estados de mexico que regreso el API
      } catch (error) {
        console.log(error);
        setGlobalError("Ocurrio un error trayendo la informacion del server"); //Cachea el error
      }

      setLoading(false);
    };
    alert("Chistirijillo pa que te asustes perrin");
    getData(); //Ejecuta el GetData
  }, []); // Se usan los [] para que se ejecute 1 sola vez el useeffect

  //todo lo que esta dentro de return en un componente de react es jsx (html)
  // checar condicionales rernarias
  return (
    <div className="bg-stone-200">
      <Nav></Nav>
      <h1 className="text-5xl text-emerald-500 font-bold underline">
        Observatorio digital --- Control+Shift+Ñ es el mejor comando de la
        historia carnal
      </h1>
      TY
      {loading ? ( // ? es un if
        <p>cargando</p>
      ) : globalError ? ( // : es un else
        globalError
      ) : (
        <div>
          {states.length > 0 ? (
            <div className="states-list containegitr">
              <Card1
                title="Alertas del mes"
                text="Número de alertas del mes."
              ></Card1>
              <Card2
                value="Verdesote"
                title="Alertas Máximas"
                text="Número de alertas máximas."
              ></Card2>
              <Card1
                value="Verdecito"
                title="Alertas por estado"
                text="Número de alertas por estado."
              ></Card1>
              {/* componente de mapa, se le manda la lista de estados del API, y se le manda el set de content*/}
              <Map
                width="0"
                height="200"
                className=""
                setTooltipContent={setContent}
                states={states}
              />
              <ReactTooltip backgroundColor="#f6755b">{content}</ReactTooltip>
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
