function Card2(props) {
  const title = props.title;
  const text = props.text;

  return (
    <div className="m-8">
      <div className="card w-96 bg-teal-900 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-orange-400">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button className="btn">Consulta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
