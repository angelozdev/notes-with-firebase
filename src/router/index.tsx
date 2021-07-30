import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Login } from "src/views";
import { Routes } from "src/consts";

// components
import { Layout } from "src/components";
import { PrivateRoute, PublicRoute } from "./components";
import { useLogin } from "src/hooks";

function App() {
  useLogin();
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact component={Home} path={Routes.HOME} />
          <PublicRoute exact component={Login} path={Routes.LOGIN} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
