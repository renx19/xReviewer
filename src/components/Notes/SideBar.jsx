import React, { useState } from 'react';
import DarkMode from '../DarkMode';
import "../Notes/Notes.css"
import { BiTrash } from 'react-icons/bi';
import { AiOutlineFileAdd } from 'react-icons/ai';
const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  // Filter notes based on the search query
  const filteredNotes = sortedNotes.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    
    <div className="app-sidebar">
        <DarkMode />
      <div className="app-sidebar-header">
        <h1 className='nt'>Notes</h1>
        <input
          type="text"
          placeholder="Search Notes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AiOutlineFileAdd className='add' onClick={onAddNote}/>
      </div>
      <div className="app-sidebar-notes">
        {filteredNotes.map(({ id, title, body, lastModified }) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
            key={id}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              
            </div>
            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
               <BiTrash className='trash' onClick={() => onDeleteNote(id)}/>
            </small>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;