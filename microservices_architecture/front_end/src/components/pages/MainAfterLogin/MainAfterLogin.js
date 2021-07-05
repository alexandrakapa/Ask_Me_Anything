import React from 'react';
import NavbarAfterLogin from '../NavbarAfterLogin/NavbarAfterLogin';
import HomeAfterLogin from '../HomeAfterLogin/HomeAfterLogin';
import { BrowserRouter as Router, Route,Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Service/Services";
import Testimonial from "../Testimonial/Testimonial";
import AskAQuestion from "../AskAQuestion/AskAQuestion";
import AnswerAQuestion from "../AnswerAQuestion/AnswerAQuestion";
import Contact from "../Contact/Contact";
import {AccountBox} from "../accountBox";
import MyAskMeAnything from "../MyAskMeAnything/MyAskMeAnything";


function MainAfterLogin(props) {

    console.log(props)
    console.log(localStorage.category)

    function renderProtectedComponent(ProtectedComponent) {
        if (localStorage.token != "") {
            return  (props) => <ProtectedComponent {...props} />;
        }
    }

    return (
        <Router>
            <NavbarAfterLogin />
            <Switch>
                {/*<Route path='/home' exact render={renderProtectedComponent(HomeAfterLogin)} />*/}
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/service" exact>
                    <Services/>
                </Route>
                <Route path="/testimonial" exact>
                    <Testimonial/>
                </Route>
                <Route path="/ask_a_question" exact>
                    <AskAQuestion/>
                </Route>
                <Route path="/answer_a_question" exact>
                    <AnswerAQuestion/>
                </Route>
                <Route path="/contact" exact>
                    <Contact/>
                </Route>
                <Route path="/login" exact>
                    <AccountBox/>
                </Route>
                <Route path="/my_ask_me_anything" exact>
                    <MyAskMeAnything/>
                </Route>
                <Route path="/home" exact>
                    <HomeAfterLogin/>
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default MainAfterLogin;