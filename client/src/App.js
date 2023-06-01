import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Front from "./components/Front/Front";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    // <BrowserRouter>
    //     <Navbar />
    //     <Switch>
    //       {/* <Route path="/" exact component={() => <Redirect to="/posts" />} /> */}
    //       <Route path="/" exact component={Front} />
    //       <Route path="/posts" exact component={Home} />
    //       <Route path="/posts/search" exact component={Home} />
    //       <Route path="/posts/:id" component={PostDetails} />
    //       <Route
    //         path="/auth"
    //         exact
    //         component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
    //       />
    //     </Switch>
    // </BrowserRouter>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Front />
        </Route>
        <Route>
          <Navbar />
          <Switch>
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
            />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
