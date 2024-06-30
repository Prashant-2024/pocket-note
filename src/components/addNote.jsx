import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const [isExpand, setIsExpanded] = useState(false);

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

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={newNote.content}
        />
        <Zoom in={isExpand}>
          <IconButton onClick={handleSubmit}>
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
