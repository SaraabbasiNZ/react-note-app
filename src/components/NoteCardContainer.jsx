import React from 'react'
import NoteCard from './NoteCard'

const NoteCardContainer = ({ notes }) => {

  const safeNotes = Array.isArray(notes) ? notes : [];
  
  return (
    <div className="container">
      <div className="note-has-grid row">
        {safeNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteCardContainer