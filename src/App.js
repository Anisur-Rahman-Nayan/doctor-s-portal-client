import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../client/src/Components/Home/Home/Home'
import Appointment from './Components/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute'
export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
        
          <Route exact path="/">
            <Home></Home>
          </Route>
        
          <Route path="/appointment">
              <Appointment></Appointment>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </PrivateRoute>
        
          <PrivateRoute path="/adddoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
        
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
