import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "~/router/routes";

const App = () => (
  <div className="App">
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  </div>
);

export default App;
