import './App.css';
import styled from "styled-components";
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
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// function App() {
//
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Switch>
//                     <Route path="/login">
//                         <Login />
//                     </Route>
//                     <Route path="/users">
//                         <Users />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
// function Home() {
//     return  <AppContainer>
//         <LandingPage/>
//     </AppContainer>
// }
//
// function Login() {
//     return  <AppContainer>
//       <AccountBox/>
//     </AppContainer>
// }
//
// function Users() {
//     return  <AppContainer>
//         <LandingPage/>
//     </AppContainer>
// }
//
// export default App;

const App = () => {
    return (
        <Router>
            <Navbar/>
            <main>
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
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
