import { Layout, NoteList, Wrapper, NoteForm } from "./components";

function App() {
  return (
    <Layout>
      <Wrapper>
        <NoteForm />
        <NoteList />
      </Wrapper>
    </Layout>
  );
}

export default App;
