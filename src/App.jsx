import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchChampions from "./components/SearchChampions";
import Champion from "./components/Champion";
import { useState, useEffect } from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <SearchChampions/>
                </Route>
                <Route path='/champion/:championName' >
                    <Champion/>
                </Route>

            </Switch>


        </Router>
    )
};

export default App