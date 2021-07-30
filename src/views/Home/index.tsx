import { Alert, Icons, NoteForm, NoteList, Wrapper } from "src/components";

function App() {
  return (
    <Wrapper>
      <div className="my-4">
        <a role="button" href="#add_note" className="btn btn-success btn-sm">
          Add new note
        </a>
      </div>
      <div id="add_note" className="modal">
        <div className="modal-box">
          <NoteForm />
        </div>
      </div>

      <Alert color="warning" Icon={Icons.Info}>
        You can edit your notes by double click in the title or description.
      </Alert>

      <NoteList />
    </Wrapper>
  );
}

export default App;
