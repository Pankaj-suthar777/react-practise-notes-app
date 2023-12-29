import { useState } from "react";
import Button from "./components/Button";
import Note from "./Note";
let i = 0;

const color = ["#a0d0d0", "#d6bad4", "#468499", "#00ff7f", "#bc131f"];

export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    i++;
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = i));
    setNotes(newNotes);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <>
      <div className="w-full py-3 bg-stone-500">
        <Button onClick={addNote} text="+ Add note"></Button>
      </div>
      <div className=" flex flex-wrap">
        {notes.map((note) => (
          <Note
            color={color[Math.floor(Math.random() * 5)]}
            note={note}
            key={note.id}
            dNote={deleteNote}
          ></Note>
        ))}
      </div>
    </>
  );
}
