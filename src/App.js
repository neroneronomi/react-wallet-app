import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/userContext';
import Home from "./routes/Home"
import Wallet from './routes/Wallet';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
             <Home />
            </Route>
            <Route exact path='/wallet'>
             <Wallet />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
};

export default App;
