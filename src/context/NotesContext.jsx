// src/context/NotesContext.jsx

import { createContext, useState, useEffect } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes && storedNotes.length>0) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

 
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };
  
  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note)));
  };
  
  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        editIndex,
        setEditIndex,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
