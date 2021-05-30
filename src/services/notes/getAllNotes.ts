import { database } from "../../firebase/client";
import { Note as INote } from "../../types";

function getAllNotes(callback: (notes: INote[]) => void) {
  return database.collection("notes").onSnapshot(({ docs }) => {
    const notes = docs.map((doc) => ({
      ...(doc.data() as INote),
      id: doc.id,
    }));

    callback(notes);
  });
}

export default getAllNotes;
