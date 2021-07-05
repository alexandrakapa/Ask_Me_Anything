import React, {useEffect, useState} from 'react'
import './NavbarAfterLogin.css';
import {Link} from 'react-router-dom';

function NavbarAfterLogin(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const username = localStorage.getItem('username');
    // console.log("here")
    // console.log(username);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>
                <Link to='/home/user' className='navbar-logo' onClick={closeMobileMenu}>
                    AskMeAnything
                    <p>Personal account</p>
                    {/*<br/>*/}
                    {/*<br/>*/}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home/user'
                              className='nav-links'
                              onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-home">
                            </i>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/display/user'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-search">
                            </i>View questions and answers
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/ask_a_question'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-question">
                            </i>Ask a question
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to = '/display_questions'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-reply">
                            </i>Answer a question
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/profile'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-user">
                            </i>My Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-sign-in-alt">
                            </i>Logout
                        </Link>
                    </li>

                </ul>
                {/*{button && <Button index='0'  onClick={logMeOut}>Sign Out</Button>}*/}
            </nav>
        </>
    );
}

export default NavbarAfterLogin;