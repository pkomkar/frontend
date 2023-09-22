import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Sidebar";
import CreateStock from "./components/Stock/createStock";
import EditStock from "./components/Stock/EditStock";
import ShowStock from "./components/Stock/viewStock";
function App() {
  const [user, setLoginUser] = useState();

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUserss")));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("MyUserss", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <div className="App">
      <Router>
        {user && user._id ? <Navbar updateUser={updateUser} /> : <div />}
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <ShowStock />
            ) : (
              <Login updateUser={updateUser} />
            )}
          </Route>

          <Route path="/register">
            <Register />
          </Route>
          {user && user._id ? (
            <Route>
              <Route path="/add-stock" exact component={CreateStock} />
              <Route path="/stock/edit/:id" exact component={EditStock} />
              <Route path="/view-stock" exact component={ShowStock} />
            </Route>
          ) : (
            <Login updateUser={updateUser} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
