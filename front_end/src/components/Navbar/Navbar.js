import React , {useState, useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// const Navbar = () => {
//
//     function animation(){
//         var tabsNewAnim = $('#navbarSupportedContent');
//         var activeItemNewAnim = tabsNewAnim.find('.active');
//         var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//         var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//         var itemPosNewAnimTop = activeItemNewAnim.position();
//         var itemPosNewAnimLeft = activeItemNewAnim.position();
//         $(".hori-selector").css({
//             "top":itemPosNewAnimTop.top + "px",
//             "left":itemPosNewAnimLeft.left + "px",
//             "height": activeWidthNewAnimHeight + "px",
//             "width": activeWidthNewAnimWidth + "px"
//         });
//         $("#navbarSupportedContent").on("click","li",function(e){
//             $('#navbarSupportedContent ul li').removeClass("active");
//             $(this).addClass('active');
//             var activeWidthNewAnimHeight = $(this).innerHeight();
//             var activeWidthNewAnimWidth = $(this).innerWidth();
//             var itemPosNewAnimTop = $(this).position();
//             var itemPosNewAnimLeft = $(this).position();
//             $(".hori-selector").css({
//                 "top":itemPosNewAnimTop.top + "px",
//                 "left":itemPosNewAnimLeft.left + "px",
//                 "height": activeWidthNewAnimHeight + "px",
//                 "width": activeWidthNewAnimWidth + "px"
//             });
//         });
//     }
//
//     useEffect(() => {
//
//         animation();
//         $(window).on('resize', function(){
//             setTimeout(function(){ animation(); }, 500);
//         });
//
//     }, []);
//
//     return (
//         <nav className="navbar navbar-expand-lg navbar-mainbg">
//
//             <NavLink className="navbar-brand navbar-logo" to="/" exact>
//                 AskMeAnything
//             </NavLink>
//
//
//             <button
//                 className="navbar-toggler"
//                 onClick={ function(){
//                     setTimeout(function(){ animation(); });
//                 }}
//                 type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <i className="fas fa-bars text-white"></i>
//             </button>
//
//             <div
//                 className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//
//                     <div className="hori-selector">
//                         <div className="left"></div>
//                         <div className="right"></div>
//                     </div>
//
//                     <li className="nav-item active">
//                         <NavLink className="nav-link" to="/" exact>
//                             <i
//                                 className="fas fa-home">
//                             </i>Home
//                         </NavLink>
//                     </li>
//
//                     <li className="nav-item active">
//                         <NavLink className="nav-link" to="/ask_a_question" exact>
//                             <i
//                                 className="fas fa-question">
//                             </i>Ask a question
//                         </NavLink>
//                     </li>
//                     <li className="nav-item active">
//                         <NavLink className="nav-link" to="/answer_a_question" exact>
//                             <i
//                                 className="fas fa-reply">
//                             </i>Answer a question
//                         </NavLink>
//                     </li>
//
//
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/login" exact>
//                             <i
//                                 className="fas fa-sign-in-alt">
//                             </i>Login
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }
// export default Navbar;

function Navbar(props) {
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
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    AskMeAnything

                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/'
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
                            to='/login'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i
                                className="fas fa-sign-in-alt">
                            </i>Login
                        </Link>
                    </li>
                </ul>
                {/*{button && <Button index='0'  onClick={logMeOut}>Sign Out</Button>}*/}
            </nav>
        </>
    );
}

export default Navbar;