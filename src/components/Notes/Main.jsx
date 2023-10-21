import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import {GiSpeaker} from 'react-icons/gi';
const Main = ({ activeNote, onUpdateNote }) => {
  const [editMode, setEditMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false); // Track speech synthesis state

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleSpeaking = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakText(activeNote.body);
    }
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  function speakText(text) {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      utterance.onend = () => setIsSpeaking(false); // Set speaking state to false when speech ends
    }
    setIsSpeaking(true);
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        {editMode ? (
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="preview-title">{activeNote.title}</h1>
        )}
        <BiEdit class="edit-button" onClick={toggleEditMode} />

        <GiSpeaker onClick={toggleSpeaking}/>
          {isSpeaking ? "Stop Reading" : "Speak Text"}
        

        <textarea
          id="body"
          class="note-area"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
          disabled={!editMode}
        />
      </div>
    </div>
  );
};

export default Main;
