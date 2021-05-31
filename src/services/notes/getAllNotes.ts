import { database } from "../../firebase/client";
import { NoteFromServer } from "../../types";

function getAllNotes(callback: (notes: NoteFromServer[]) => void) {
  return database.collection("notes").onSnapshot(({ docs }) => {
    const notes = docs.map((doc) => ({
      ...(doc.data() as NoteFromServer),
      id: doc.id,
    }));

    callback(notes);
  });
}

export default getAllNotes;
