import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Comps/Navbar';
import Main from './Comps/Main';
import CreateItem from './Comps/CreateItem';
import DeleteItem from './Comps/DeleteItem';
import UpdateItem from './Comps/UpdateItem';
import About from './Comps/About';
import NotFound from './Comps/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
      
        <Switch>
          <Route exact path="/"><Main /></Route> 
          <Route exact path="/DeleteItem/:id"> <DeleteItem /> </Route> 
          <Route exact path="/CreateItem"><CreateItem /></Route> 
          <Route exact path="/UpdateItem/:id"> <UpdateItem /> </Route>
          <Route exact path="/About"> <About/> </Route>
          <Route path="/*"> <NotFound /> </Route> 

        </Switch>
        
      </Router>

      <footer>
        ..a store API app to save your items<br/>
        &copy; 2022

      </footer>
    </div>
  );
}

export default App;
