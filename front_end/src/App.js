import './App.css';
// import styled from "styled-components";
// import {AccountBox} from "./components/accountBox";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Service/Services';
import Testimonial from './components/pages/Testimonial/Testimonial';
import AskAQuestion from './components/pages/AskAQuestion/AskAQuestion';
import AnswerAQuestion from './components/pages/AnswerAQuestion/AnswerAQuestion';
import {AccountBox} from "./components/pages/accountBox";
import Footer from './components/Footer/Footer';
import MyAskMeAnything from "./components/pages/MyAskMeAnything/MyAskMeAnything";
import Profile from "./components/pages/Profile/Profile";
import HomeAfterLogin from "./components/pages/HomeAfterLogin/HomeAfterLogin";
import DisplayQuestionsAndAnswers from './components/pages/DisplayQuestionsAndAnswers/DisplayQuestionsAndAnswers';

const App = () => {
    return (
        <div className="body">
        <Router >
            {/*<Navbar/>*/}
            <main >
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
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
                    <Route path="/home/user" exact>
                        <HomeAfterLogin/>
                    </Route>
                    <Route path="/profile" exact>
                        <Profile/>
                    </Route>
                    <Route path="/display" exact>
                        <DisplayQuestionsAndAnswers/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
            {/*<Footer/>*/}
        </Router>
        </div>
    );
}

export default App;
