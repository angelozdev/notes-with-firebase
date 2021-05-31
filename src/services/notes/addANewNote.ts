import { database } from "../../firebase/client";
import { Note } from "../../types";
import firebase from "firebase/app";

async function addANewNote(note: Note) {
  const newNote = {
    ...note,
    createAt: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  return database.collection("notes").add(newNote);
}

export default addANewNote;
