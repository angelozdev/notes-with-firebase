import { database } from "../../firebase/client";
import { Note } from "../../types";

function updateNote(id: string, data: Note) {
  return database.collection("notes").doc(id).update(data);
}

export default updateNote;
