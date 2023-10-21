import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import Menu from "../components/CircularMenu";
import { NavLink } from 'react-router-dom';
import CircularMenu from '../components/CircularMenu';
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <NavLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500`}
      to={`/${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </NavLink>
  );
};


const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false); // Define isMenuToggled state here
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = selectedPage === "home" ? "" : "";
  
  return (
    <nav className ={`z-40 w-full fixed top-0 py-6 bg-grey`}>
     <div className="flex items-center justify-between mx-auto w-5/6 text-green">
     <h4 className="font-playfair text-3xl text-green font-bold ">MJ</h4>

     {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="ToDoApp" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Notes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Flashcards" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Quiz" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <>
            {/* Wrap the Menu component in a div and use Flexbox to align it */}
            
            <CircularMenu isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} setSelectedPage={setSelectedPage} />
        
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


