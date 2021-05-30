import { database } from "../../firebase/client";
import { Note } from "../../types";

async function addANewNote(note: Omit<Note, "id">) {
  return database.collection("notes").add(note);
}

export default addANewNote;
