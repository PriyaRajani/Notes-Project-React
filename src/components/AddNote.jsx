import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddNote = () => {
  const { addNote, updateNote, editIndex, setEditIndex, notes } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  React.useEffect(() => {
    if (editIndex !== null) {
      const note = notes[editIndex];
      setTitle(note.title);
      setContent(note.content);
    }
  }, [editIndex, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      if (editIndex === null) {
        addNote({ id: Date.now(), title, content });
      } else {
        updateNote(notes[editIndex].id, { title, content });
        setEditIndex(null);
      }
      setTitle('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>Content:</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        className="mx-2 mb-2 mt-2"
      >
        {editIndex === null ? 'Add Note' : 'Update Note'}
      </Button>
    </Form>
  );
};

export default AddNote;