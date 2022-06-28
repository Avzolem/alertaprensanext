function Card2(props) {
    const title = props.title;
    const text = props.text;
    
      return (
    <div class="m-8">
      <div class="card w-96 bg-teal-900 text-primary-content">
        <div class="card-body">
          <h2 class="card-title text-emerald-300">{title}</h2>
          <p>{text}</p>
          <div class="card-actions justify-end">
            <button class="btn">Consulta</button>
          </div>
        </div>
      </div>
    </div>
      );
  }
  
  export default Card2

