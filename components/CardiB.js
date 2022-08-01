const Card = ({ title, url }) => {
  return (
    <div
      className={`card rounded-md  w-full m-4 lg:w-80 h-40 bg-azulgrey text-primary-content text-sm`}
    >
      <div className="card-body">
        <h2
          className={`card-title text-bold font-extrabold text-3xl justify-center text-emerald-300`}
        >
          {title}
        </h2>
        <br></br>
        <div className="card-actions place-content-center">
          <a href={url}>
            <button className="btn-sm bg-greynew">Consultar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
