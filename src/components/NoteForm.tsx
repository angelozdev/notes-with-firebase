import { ChangeEvent, FormEvent, useState } from "react";
import { Note as INote } from "../types";

interface Props {
  addANote: (note: Omit<INote, "id">) => void;
}

function NoteForm({ addANote }: Props) {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addANote(values);
    setValues({ title: "", description: "" });
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="form-control">
        <label className="label block">
          <p className="label-text mb-2">Title</p>
          <input
            type="text"
            placeholder="Enter the note title"
            className="input input-bordered w-full"
            name="title"
            value={values.title}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label block">
          <p className="label-text mb-2">Description</p>
          <textarea
            onChange={onChange}
            value={values.description}
            name="description"
            className="textarea h-24 textarea textarea-bordered w-full"
            placeholder="Enter the note description"
          />
        </label>
      </div>

      <button
        disabled={!values.title || !values.description}
        className="btn btn-success btn-sm"
      >
        Save
      </button>
    </form>
  );
}

export default NoteForm;
