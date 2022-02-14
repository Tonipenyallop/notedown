import React from "react";
import axios from "axios";

export default function Notes({ notes, isShown, setIsShown }) {
  return (
    <div>
      {notes.length === 0 ? (
        <div
          onClick={() => {
            const temp = !isShown;
            console.log(temp);
            setIsShown(temp);
          }}
        >
          Be happy as always
        </div>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note.id}>
              <div
                onClick={() => {
                  const temp = !isShown;
                  console.log(temp);
                  setIsShown(temp);
                }}
              >{` ${note.id} ${note.todo}`}</div>
              <button
                onClick={() => {
                  axios.delete("/api/delete", { data: { todo: note.todo } });
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
