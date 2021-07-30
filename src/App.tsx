import Router from "./router";

// contexts
import { AuthProvider } from "src/contexts";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
