import React from 'react';
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Departments from "./components/Departments";
import DepartmentForm from "./components/DepartmentForm";
import Navbar from "./components/Navbar";
import DepartmentView from "./components/DepartmentView";
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
