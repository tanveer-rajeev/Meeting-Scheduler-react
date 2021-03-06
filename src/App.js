import './App.css';
import Login from './Components/Credential/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import {createContext, useState} from 'react';
import Home from "./Components/Home/Home";
import UserScheduler from "./Components/User/UserScheduler";
import DisplayRooms from "./Components/Room/DisplayRooms";
import CreateRoom from "./Components/Room/CreateRoom";
import './App.css'
export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>

                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/rooms">
                        <DisplayRooms/>
                    </Route>
                    <Route path="/userScheduler">
                        <UserScheduler/>
                    </Route>

                    <Route path="/addRoom">
                       <CreateRoom modal={true}/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>


    );
}

export default App;
