// src/components/NotesList.js
import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const NotesList = () => {
  const { notes, deleteNote, setEditIndex } = useContext(NotesContext);

  return (
    <ListGroup>
      {notes.map((note, index) => (
        <ListGroup.Item key={note.id}>
          <h5>{note.title}</h5>
          <p>{note.content}</p>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setEditIndex(index)}
            className="mx-1"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteNote(note.id)}
          
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default NotesList;