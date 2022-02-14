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
          It is empty
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
              >
                {` ${note.id} ${note.todo}`}
              </div>

              {isShown ? <li>Que pasa tio</li> : <div></div>}
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
