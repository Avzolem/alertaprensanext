import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/mx.json"; //lista de estados con cordenadas para poder pintar el mapa

const Map = ({ setTooltipContent, states }) => {
  //function que toma la lista de estados del api y compara con el valor de statecode del hover, para ver si matchean
  //devuelve un texto
  const findStateCode = (stateCodeHover) => {
    let text = "";
    const match = states.find((state) => {
      return state.state_code === stateCodeHover;
    });

    if (match) {
      text = `${match.name} - ${match.reportes} Reportes`;
    } else {
      text = "No hay informacion";
    }

    return text;
  };

  return (
    <ComposableMap
      data-tip=""
      a
      style={{ backgroundColor: "#e7e5e4" }}
      projection="geoAlbers"
      projectionConfig={{
        center: [-5, 25],
      }}
    >
      <Geographies
        style={{ backgroundColor: "#e7e5e4", bottom: 100 }}
        geography={geoUrl}
      >
        {/* toma la lista de geoUrl y la itera para poder pintar el mapa */}
        {/* dentro tiene evento de mouseenter que luego usa la funcion de findStateCode para hacer match y setear el texto del tooltip */}
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  console.log("Tooltip actualizado");
                  const tootltipText = findStateCode(geo.properties.state_code);
                  setTooltipContent(tootltipText); //actualiza el estado del tooltip, que esta en el componente de la pagina
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#70d7c4", //Color Default
                    outline: "none",
                    
                  },
                  hover: {
                    fill: "#21827e", //Color Hover
                    outline: "none",
                    
                  },
                  pressed: {
                    //Color Presionado
                    fill: "#f6755b",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
