import React, {useEffect, useState} from 'react'
import './NavbarAfterLogin.css';
import {Link, NavLink} from 'react-router-dom';
import $ from 'jquery';

function NavbarAfterLogin(props) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);

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


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                    AskMeAnything

                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home'
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
                            to='/answer_a_question'
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