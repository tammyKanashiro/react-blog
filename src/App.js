import NavBar from './Nav';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch, } from   'react-router-dom';
import Create from './Create';

function App() {
  // const title = 'Welcome to the New Blog!'
  // const likes = 50;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* Switch component makes sure only one router shows at any one time */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
          </Switch>

          {/* <h1>{title}</h1> */}
          {/* <p>Liked {likes} times</p> */}
        </div>
      </div>
      </Router>
  );
}

export default App;
