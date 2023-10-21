import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from 'react-router-dom';

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
const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[45%] right-7">
      <NavLink to="/home" className={`custom-link ${selectedPage === "home" ? "" : ""}`}>
        <img src={require('../assets/house.png')} alt="Home" />
      </NavLink>
      <NavLink to="/ToDoApp" className={`custom-link ${selectedPage === "ToDoApp" ? "" : ""}`}>
        <img src={require('../assets/to-do-list.png')} alt="ToDoApp" />
      </NavLink>
      <NavLink to="/Notes" className={`custom-link ${selectedPage === "Notes" ? "" : ""}`}>
        <img src={require('../assets/notes.png')} alt="Notes" />
      </NavLink>
      <NavLink to="/Flashcards" className={`custom-link ${selectedPage === "Flashcards" ? "" : ""}`}>
        <img src={require('../assets/flash-cards.png')} alt="Flashcards" />
      </NavLink>
      <NavLink to="/Quiz" className={`custom-link ${selectedPage === "Quiz" ? "" : ""}`}>
        <img src={require('../assets/ideas.png')} alt="Quiz" />
      </NavLink>
    </div>
  );
};


export default DotGroup;