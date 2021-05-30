import { Note } from "./";
const notes = [
  {
    id: 1,
    description: "nota uno",
  },
  {
    id: 2,
    description: "nota dos",
  },
];

function NoteList() {
  return (
    <ul>
      {notes.map(({ id, description }) => (
        <Note key={id} description={description} />
      ))}
    </ul>
  );
}

export default NoteList;
