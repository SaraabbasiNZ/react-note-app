import React from 'react'
import NoteCard from './NoteCard'
import Loader from './Loader';

const NoteCardContainer = ({notes, loading}) => {

  const safeNotes = Array.isArray(notes) ? notes : [];
  
  return (
    <div className="container">
      <div className="note-has-grid row">
        { loading && <Loader loading={loading} /> }
        {safeNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}

export default NoteCardContainer