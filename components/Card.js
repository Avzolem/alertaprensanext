const Card = ({ title, text, type, setMapLoader, total }) => {
  return (
    <div className="mx-4 w-full  lg:mx-8">
      <div
        className={`card rounded-md  w-full lg:w-80 h-44 ${
          type === "reportsMap" ? "bg-azulgrey" : "bg-azuldark"
        } text-primary-content text-sm`}
      >
        <div className="card-body">
          <h2
            className={`card-title ${
              type === "reportsMap" ? "text-emerald-300" : "text-orangenew"
            }`}
          >
            {title}
          </h2>
          <p>{text}</p>

          <div className="card-actions place-content-center">
            <p className="text-bold font-bold text-3xl">Total</p>
            <p className="text-bold font-extrabold text-3xl">{total}</p>
            <button
              className="invisible lg:visible btn-sm bg-greynew"
              onClick={() => setMapLoader(type)}
            >
              Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
