import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavManu.css';

const NavManu = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   return (
      <Navbar expand="lg" className="nav-manu fixed-top">
         <Container>
            <Link to="/" className="navbar-brand">
               Scheduler
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                  <Link to="/" className="nav-link">
                  ʜᴏᴍᴇ
                  </Link>
                  {/*<Link to="/iptv" className="nav-link">ɪᴘᴛᴠ</Link>*/}
                  {/*<Link to="/dashboard" className="nav-link">ᴅᴀꜱʜʙᴏᴀʀᴅ</Link>*/}
                  {loggedInUser.username ? (
                     <button
                        type="button"
                        className="btn custom-btn py-lg-0 px-lg-2"
                        onClick={() => setLoggedInUser({})}
                     >
                        ʟᴏɢ ᴏᴜᴛ
                     </button>
                  ) : (
                     <Link to="/login" className="nav-link">
                        ʟᴏɢɪɴ
                     </Link>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavManu;
