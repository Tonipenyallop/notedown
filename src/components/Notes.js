import React from "react";
import axios from "axios";
import Note from "./Note";

export default function Notes({ notes, isShown, setIsShown }) {
  function toggle() {
    const temp = !isShown;
    console.log(temp);
    setIsShown(temp);
  }

  return (
    <div>
      {notes.length === 0 ? (
        <div onClick={toggle}>It is empty</div>
      ) : (
        <Note notes={notes} isShown={isShown} setIsShown={setIsShown} />
      )}
    </div>
  );
}
