import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import NoteTakingSpace from "./NoteTakingSpace";
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
      <NoteTakingSpace isShown={isShown} />
    </div>
  );
}

export default App;
