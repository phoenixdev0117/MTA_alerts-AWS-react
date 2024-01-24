import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm} />
        {/* Other routes */}
      </Switch>
    </div>
  );
}

export default App;
