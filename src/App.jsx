import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SearchChampions from "./components/SearchChampions";

function App() {

    return (
        <Router>

          
            <Switch>
                <Route path="/">
                    <SearchChampions />
                </Route>
            </Switch>
        </Router>
    )
};

export default App