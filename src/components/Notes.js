import React from "react";

export default function Notes({ notes }) {
  return (
    <div>
      {notes.length === 0 ? (
        <div>No Notes yet</div>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note.id}>
              <div>{` ${note.id} ${note.todo}`}</div>
              <button>Click me</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
