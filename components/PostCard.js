function PostCard(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div class="card w-96 bg-cyan-700 text-primary-content">
      <div class="card-body">
        <h2 class="card-title text-emerald-300">{title}</h2>
        <p>{text}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default PostCard;
