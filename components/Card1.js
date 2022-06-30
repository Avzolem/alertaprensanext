function Card1(props) {
  const title = props.title;
  const text = props.text;

  return (
    <div className="m-8">
      <div className="card w-96 bg-cyan-700 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-emerald-300">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button className="btn">Consulta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
