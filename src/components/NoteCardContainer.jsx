import React from 'react'
import NoteCard from './NoteCard'

const NoteCardContainer = (notes) => {
  return (
    <div className="container">
    <div className="note-has-grid row">
      <NoteCard />
            
    </div>
    </div>
  )
}

export default NoteCardContainer