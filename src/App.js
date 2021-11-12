import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import TutorialsListBuy from "./components/add-list-buy";
import Tutorialcompras from "./components/tutorialcomprar";



class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Mercado ICTS
          </a>
          <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Lista de Produtos
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/buy"} className="nav-link">
                  Lista de Compras
                </Link>
              </li>

           
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Cadastrar Produtos
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/addbuy"} className="nav-link">
                  Comprar
                </Link>
              </li>

            
            
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/buy" component={TutorialsListBuy} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/addbuy" component={Tutorialcompras} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;