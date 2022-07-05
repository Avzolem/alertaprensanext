import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Nav from "../components/Nav";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import MainLayout from "../components/Layouts/MainLayout";

export default function Home({message}) {
  const [states, setStates] = useState([]); //para guardar el arreglo de los estados que viene del API, inicia en vacio
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null); //para mostrar si hay un error trayendo informacion
  const [content, setContent] = useState(""); //para guardar el texto que va en el tooltip cuando se hace hover en un estado del mapa

  console.log("message =>", message)

  // esto se ejecuta una vez, una vez que el componente se monta
  useEffect(() => {
    //esta funcion consume el servicio del API
    const getData = async () => {
      setLoading(true); //inicia loading true
      try {
        const response = await axios.get(
          "/api/states" // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        ); //le hace GET a el api de estados, el await no se puede utilizar si la funcion padre no tiene Async
        const responseStates = response.data.all_states; //Para pruebas en el server cambiar a response.data ;
        //gets minimum and maximum of reports of states
        const minValue = Math.min(
          ...responseStates.map((state) => state.reports)
        );
        const maxValue = Math.max(
          ...responseStates.map((state) => state.reports)
        );
        const parsedStates = responseStates.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity = (state.reports - minValue) / (maxValue - minValue);
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
          <div className="">
            {states.length > 0 ? (
              <div className="states-list container flex sm:flex-none">
                {/* Aquí van los componentes Card */}
                {/* componente de mapa, se le manda la lista de estados del API, y se le manda el set de content*/}

                <div className="container">
                  <Card1
                    title="Reportes de amenazas"
                    text="Número de reportes de amenazas blah blah blah blah blah"
                  ></Card1>
                  <Card2
                    title="Alertas Máximas"
                    text="Número de alertas máximas"
                  ></Card2>
                </div>
                <div className="container md:flex-none ">
                  <Map
                    className=""
                    setTooltipContent={setContent}
                    states={states}
                  />
                </div>
                <ReactTooltip backgroundColor="#f6755b">{content}</ReactTooltip>
                {/*<ul>
                  {states.map((state, index) => (
                    <li key={index}>
                      <p>Nombre: {state.name}</p>
                      <p>Reportes: {state.reports} </p>
                    </li>
                  ))}
                </ul>*/}
              </div>
            ) : (
              <p>No hay estados</p>
            )}
          </div>
        )}
      </MainLayout>
    </div>
  );
}


export async function getServerSideProps(context) {
  console.log("hola")
  return {
    props: {
      message: "hello"
    }, // will be passed to the page component as props
  }
}
