
import SlideBar from "../components/SlideBar/SlideBar";
import Home from "./Home/Home";
import NavBar from "../components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Users from "./Users/Users";
import Groups from "./Groups/Groups";
import AddGroup from "./AddGroup/AddGroup";
import ViewGroup from "./ViewGroup/ViewGroup";
import Kanban from "./Kanban/Kanban";
import AuthComponent from "../components/AuthComponent/AuthComponent";

// import 'bootstrap/dist/css/bootstrap.css'

function Main() {
    return (
            <Router>
                <AuthComponent>
                    <div id="app">
                        <SlideBar/>
                        <div id="main">
                            <NavBar/>

                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/users" component={Users}/>
                                <Route exact path="/groups" component={Groups}/>
                                <Route path="/groups/add" component={AddGroup}/>
                                <Route path="/groups/:id" component={ViewGroup}/>
                                <Route path="/kanban" component={Kanban}/>

                            </Switch>
                        </div>
                    </div>
                </AuthComponent>


            </Router>



    );
}

export default Main;
