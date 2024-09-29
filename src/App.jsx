import React from 'react';
import { NotesProvider } from './context/NotesContext';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <NotesProvider>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Notes App</Card.Title>
            <React.Fragment key="add-note">
              <AddNote />
            </React.Fragment>
            <React.Fragment key="notes-list">
              <NotesList />
            </React.Fragment>
          </Card.Body>
        </Card>
      </Container>
    </NotesProvider>
  );
};

export default App;