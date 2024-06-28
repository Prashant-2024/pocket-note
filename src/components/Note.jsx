import React from "react";
import notes from "../notes";
import NoteCard from "./noteCard";

function Note() {
  return notes.map((note) => (
    <NoteCard key={note.key} title={note.title} content={note.content} />
  ));
}

export default Note;
