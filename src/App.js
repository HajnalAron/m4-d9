import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import Registration from "./components/Registration";
import Navbar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <header className="App-header">
          <Switch>
            <Route
              path="/"
              exact
              render={() => <BookList books={fantasyBooks} />}
            />
            <Route path="/registration" exact component={Registration} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
