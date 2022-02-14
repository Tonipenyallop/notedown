import React from "react";

export default function Notes({ notes, isShown, setIsShown }) {
  return (
    <div>
      {notes.length === 0 ? (
        <div>No Notes yet</div>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
