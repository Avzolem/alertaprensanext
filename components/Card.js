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
            className={`card-title text-base font-semibold ${
              type === "reportsMap" ? "text-emerald-300" : "text-orangenew"
            }`}
          >
            {title}
          </h2>
          <p className="text-grey-300">{text}</p>

          <div className="card-actions place-content-center">
            <p className="text-bold font-bold text-lg text-teal-100">Total</p>
            <p className="text-bold font-extrabold text-teal-100 text-lg">{total}</p>
            <button
              className="invisible lg:visible btn-sm rounded bg-greynew hover:bg-greyhover"
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
