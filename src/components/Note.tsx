import { notesService } from "../services";
import { NoteFromServer } from "../types";

function Note({ description, title, id, createAt }: NoteFromServer) {
  const deleteNote = async () => {
    await notesService.removeANoteById(id);
  };

  const date = new Date(createAt.seconds * 1000);
  const formatedDate = new Intl.DateTimeFormat("us-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  return (
    <li className="card lg:card-side border mb-2 hover:shadow">
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="mb-4">{description}</p>

        <p className="text-gray-500 border-t">
          <time>
            <small>{formatedDate}</small>
          </time>
        </p>

        <div className="card-actions">
          <button className="btn btn-warning btn-sm">Update</button>

          <button
            onClick={deleteNote}
            className="btn btn-ghost btn-sm hover:bg-red-700 hover:text-white text-red-700"
          >
            Remove note
          </button>
        </div>
      </div>
    </li>
  );
}

export default Note;
