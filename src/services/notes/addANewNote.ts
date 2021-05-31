import { database } from "../../firebase/client";
import { Note } from "../../types";
import firebasae from "firebase";

async function addANewNote(note: Note) {
  const newNote = {
    ...note,
    createAt: firebasae.firestore.Timestamp.fromDate(new Date()),
  };

  return database.collection("notes").add(newNote);
}

export default addANewNote;
