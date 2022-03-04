
import React, {useState,useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';



function Navbar () {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState (true)
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   
   const showButton = () =>{
       if (window.innerWidth <= 960){
        setButton(false);
       } else {
           setButton(true);
       }
   }

   useEffect(() => {
       showButton() 
   },[])

   window.addEventListener ('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#4169BE'}}>
    
      <Nav>
          <NavbarContainer>
              <NavLogo to= '/'>
                  <img src="/pictures/Tabibcom logo.png" width="37%" alt="" ></img>
              </NavLogo>

            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/>: <FaBars/>}
                
            </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                   <NavItem>
                       <NavLinks to='/'>Home</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/About'>About</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Facility'>Facility</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Review'>Review</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Contact'>Contact</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Post'>Post</NavLinks>
                   </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                               <Button primary> Sign Up</Button>
                            </NavBtnLink>
                        ):(
                            <NavBtnLink to="sign-up">
                                <Button onClick={closeMobileMenu} fontBig primary>
                                    Signup
                                </Button>
                            </NavBtnLink>
                        )}

                    </NavItemBtn>
               </NavMenu>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>

    </>
  );
};

export default Navbar
