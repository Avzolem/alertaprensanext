function PostCard(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div className="flex flex-1 p-2 justify-center ">
      <div className="card w-96 bg-cyan-700 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-emerald-300">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
