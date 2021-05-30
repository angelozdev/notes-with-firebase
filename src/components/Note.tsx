interface Props {
  description: string;
}

function Note({ description }: Props) {
  return (
    <li className="card lg:card-side border mb-2">
      <div className="card-body p-4">
        <h2 className="card-title">No Images</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Note;
