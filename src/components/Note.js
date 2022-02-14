import React from "react";
import axios from "axios";

export default function Note({ notes, isShown, setIsShown }) {
  function toggle() {
    const temp = !isShown;
    console.log(temp);
    setIsShown(temp);
  }

  return (
    <div>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <div onClick={toggle}>{note.todo}</div>

            {isShown ? <li>Que pasa tio</li> : <div></div>}
            <button
              onClick={() => {
                axios.delete("/api/delete", { data: { id: note.id } });
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
