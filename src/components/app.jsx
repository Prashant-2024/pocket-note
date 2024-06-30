import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import AddNote from "./addNote";
import NoteCard from "./noteCard";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
    console.log(newNote);
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <AddNote onClick={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteCard
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
