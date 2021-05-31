import { ChangeEvent, useState, useEffect } from "react";
import { notesService } from "../services";
import { NoteFromServer } from "../types";

function Note({ description, title, id, createAt }: NoteFromServer) {
  const [isEditMode, setIsEditMode] = useState({
    description: false,
    title: false,
  });

  const [newValues, setNewValues] = useState({
    description,
    title,
  });

  const onModifyValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewValues({
      ...newValues,
      [name]: value,
    });
  };

  const deleteNote = async () => {
    await notesService.removeANoteById(id);
  };

  const updateNote = async () => {
    const { title, description } = newValues;

    setIsEditMode({
      description: false,
      title: false,
    });

    await notesService.updateNote(id, {
      title,
      description,
    });
  };

  const date = new Date(createAt.seconds * 1000);
  const formatedDate = new Intl.DateTimeFormat("us-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  useEffect(() => {
    setNewValues({ description, title });
  }, [description, title]);

  return (
    <li className="card lg:card-side border mb-2 hover:shadow">
      <div className="card-body p-4">
        {isEditMode.title ? (
          <div className="form-control mb-2">
            <input
              type="text"
              placeholder="Edit the title"
              className="input input-bordered"
              value={newValues.title}
              onChange={onModifyValues}
              name="title"
            />
          </div>
        ) : (
          <h2
            onDoubleClick={() => {
              setIsEditMode({
                ...isEditMode,
                title: true,
              });
            }}
            className="card-title"
          >
            {newValues.title}
          </h2>
        )}

        {isEditMode.description ? (
          <div className="form-control mb-2">
            <input
              type="text"
              placeholder="Edit the description"
              className="input input-bordered"
              value={newValues.description}
              onChange={onModifyValues}
              name="description"
            />
          </div>
        ) : (
          <p
            onDoubleClick={() => {
              setIsEditMode({
                ...isEditMode,
                description: true,
              });
            }}
          >
            {newValues.description}
          </p>
        )}

        <div className="divider my-1" />

        <p className="text-gray-500 text-xs">
          <time>{formatedDate}</time>
        </p>

        <div className="mt-2">
          {isEditMode.description || isEditMode.title ? (
            <button
              onClick={updateNote}
              className="btn btn-warning btn-sm mr-2"
            >
              Modify
            </button>
          ) : (
            <button
              onClick={deleteNote}
              className="btn btn-ghost btn-sm hover:bg-red-700 hover:text-white text-red-700 border border-red-700"
            >
              Delete note
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Note;
