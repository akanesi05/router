
import { BrowserRouter, Link, Switch,Route } from "react-router-dom";
import './App.css';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Home } from './homes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Link to="/">home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        <br />
        
        
      
      </header>
    </div>
    <Switch >
      <Route exact path="/"></Route>
      <Page1/>

      <Route  path="/page1"></Route>
      <Page1/>

      <Route  path="/page2"></Route>
      <Page2/>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
