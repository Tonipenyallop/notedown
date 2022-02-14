import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import NoteTakingSpace from "./NoteTakingSpace";
import Input from "./Input";
function App() {
  const [notes, setNotes] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const sentReq = async () => {
    await axios.get("/api/notes").then((res) => setNotes(res.data));
  };
  useEffect(() => {
    sentReq();
  }, [notes]);

  return (
    <div>
      <Notes notes={notes} isShown={isShown} setIsShown={setIsShown} />

      <input type="text" placeholder="Right side " id="input" />
      <button
        onClick={() => {
          const input = document.getElementById("input");
          console.log(input.value);
          axios.post("/api/add", { todo: input.value });
          input.value = "";
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;
