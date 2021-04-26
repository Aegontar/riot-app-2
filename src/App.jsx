import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SearchChampions from "./components/SearchChampions";

function App() {

    return (
        <Router>
            <div> <p>Hello world!</p> </div>
            <Link to="/">SearchChampions</Link>
            <Switch>
                <Route path="/">
                    <SearchChampions />
                </Route>
            </Switch>
        </Router>
    )
};

export default App