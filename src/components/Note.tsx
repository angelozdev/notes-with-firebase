interface Props {
  description: string;
  title: string;
  removeNote: (id: string) => void;
  id: string;
}

function Note({ description, title, removeNote, id }: Props) {
  return (
    <li className="card lg:card-side border mb-2 hover:shadow">
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={() => removeNote(id)}
            className="btn btn-error btn-sm"
          >
            Remove note
          </button>
          {/* <button className="btn btn-ghost">More info</button> */}
        </div>
      </div>
    </li>
  );
}

export default Note;
