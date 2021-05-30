import { database } from "../../firebase/client";

async function removeANoteById(id: string) {
  return database
    .collection("notes")
    .doc(id)
    .delete()
    .then(() => {
      return "Document successfully deleted!";
    });
}

export default removeANoteById;
