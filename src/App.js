import './sass/App.scss';
import Nav from './components/nav/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Works from './components/works/Works';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav className="nav"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
