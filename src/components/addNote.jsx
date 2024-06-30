import React, { useState } from "react";

function AddNote(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    props.onClick(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
