import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import Map2 from "../components/Map2";
import ReactTooltip from "react-tooltip";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Card";

export default function Home() {
  const [states, setStates] = useState([]); //para guardar el arreglo de los estados que viene del API, inicia en vacio
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null); //para mostrar si hay un error trayendo informacion
  const [content, setContent] = useState(""); //para guardar el texto que va en el tooltip cuando se hace hover en un estado del mapa
  const [maploader, setMapLoader] = useState("reportsMap");

  // esto se ejecuta una vez, una vez que el componente se monta
  useEffect(() => {
    //esta funcion consume el servicio del API
    const getData = async () => {
      setLoading(true); //inicia loading true
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_STATES_URL
          // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        ); //le hace GET a el api de estados, el await no se puede utilizar si la funcion padre no tiene Async
        const responseStates = response.data.all_states; //Para pruebas en el server cambiar a response.data ;
        //gets minimum and maximum of reports of states
        const minValue = Math.min(
          ...responseStates.map((state) => {
            return state.reports;
          })
        );
        const maxValue = Math.max(
          ...responseStates.map((state) => {
            return state.reports;
          })
        );
        const parsedStates = responseStates.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity = (state.reports - minValue) / (maxValue - minValue); // (state.reports - minValue) / (maxValue - minValue);
          newState.url = `/estados/${state.state_code}`;
          return newState;
        });

        setStates(parsedStates); //actualiza el estado de react con los estados de mexico que regreso el API

        const responsealerts = await axios.get(
          process.env.NEXT_PUBLIC_API_ALERTS_URL
          // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        );
        const responseAlerts = responsealerts.data.all_states; //Para pruebas en el server cambiar a response.data ;
        //gets minimum and maximum of reports of states
        const minValuetwo = Math.min(
          ...responseAlerts.map((state) => state.alerts)
        );
        const maxValuetwo = Math.max(
          ...responseAlerts.map((state) => state.alerts)
        );
        const parsedAlerts = responseAlerts.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity =
            (state.alerts - minValuetwo) / (maxValuetwo - minValuetwo); //
          newState.url = `/estados/${state.state_code}`;
          return newState;
        });

        console.log(parsedAlerts);

        setAlerts(parsedAlerts);
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
      <MainLayout>
        {loading ? ( // ? es un if
          <p>cargando</p>
        ) : globalError ? ( // : es un else
          globalError
        ) : (
          <div>
            <div className="container">
              {states.length > 0 ? (
                <div className="">
                  <div className="">
                    <div className="states-list container md:flex">
                      {/* Aquí van los componentes Card */}
                      {/* componente de mapa, se le manda la lista de estados del API, y se le manda el set de content*/}

                      <div className="container">
                        <Card
                          title="Soy titulo"
                          text="soy mensaje"
                          type="reportsMap"
                          setMapLoader={setMapLoader}
                        />
                        <Card
                          title="Soy titalrulo"
                          text="soy mensaje"
                          type="alertsMap"
                          setMapLoader={setMapLoader}
                        />
                      </div>
                      <div className="container md:flex-none">
                        {maploader === "reportsMap" && (
                          <Map
                            className=""
                            setTooltipContent={setContent}
                            states={states}
                          />
                        )}
                        {maploader === "alertsMap" && (
                          <Map2
                            className=""
                            setTooltipContent={setContent}
                            alerts={alerts}
                          />
                        )}
                      </div>
                      <ReactTooltip backgroundColor="#f6755b">
                        {content}
                      </ReactTooltip>
                      {/*<ul>
                  {states.map((state, index) => (
                    <li key={index}>
                      <p>Nombre: {state.name}</p>
                      <p>Reportes: {state.reports} </p>
                    </li>
                  ))}
                </ul>*/}
                    </div>
                  </div>
                </div>
              ) : (
                <p>No hay estados</p>
              )}
            </div>
          </div>
        )}
      </MainLayout>
    </div>
  );
}
