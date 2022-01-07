import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { auth } from "./utils/firebase";
import {setuser} from './redux/auth/action'
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(setuser(authuser))
      } else {
        dispatch(setuser(null))
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/product/:id">
            <Header />
            <SingleProduct/>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
