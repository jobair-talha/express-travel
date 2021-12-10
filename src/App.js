import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import GetService from "./Pages/GetService/GetService";
import EditService from "./Pages/EditService/EditService";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/create-service">
            <Services></Services>
          </PrivateRoute>
          <Route exact path="/service">
            <GetService></GetService>
          </Route>
          <PrivateRoute path="/service/:id">
            <EditService></EditService>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
