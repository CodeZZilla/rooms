import './App.css';
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Users from "./pages/Users/Users";
import Groups from "./pages/Groups/Groups";
import AddGroup from "./pages/AddGroup/AddGroup";
import ViewGroup from "./pages/ViewGroup/ViewGroup";
import Kanban from "./pages/Kanban/Kanban";
import Login from "./pages/Login/Login";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import Container from "./hoc/container/Container";
// import 'bootstrap/dist/css/bootstrap.css';
// import './vendors/iconly/bold.css';
// import './vendors/perfect-scrollbar/perfect-scrollbar.css';
// import './vendors/bootstrap-icons/bootstrap-icons.css';

// import 'bootstrap/dist/css/bootstrap.css'

function App() {


    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <AuthComponent>
                    <Container>
                        <Route exact path="/" component={Home}/>
                        <Route path="/users" component={Users}/>
                        <Route exact path="/groups" component={Groups}/>
                        <Route  path="/groups/add" component={AddGroup}/>
                        <Route  path="/groupsView/:id" component={ViewGroup}/>
                        <Route path="/kanban" component={Kanban}/>
                    </Container>
                </AuthComponent>
            </Switch>
        </Router>


    );
}

export default App;
