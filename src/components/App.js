import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import NoteTakingSpace from "./NoteTakingSpace";
function App() {
  const [notes, setNotes] = useState([]);
  const sentReq = async () => {
    await axios.get("/api/notes").then((res) => setNotes(res.data));
  };
  useEffect(() => {
    sentReq();
  }, [notes]);

  return (
    <div>
      <Notes notes={notes} />
      <NoteTakingSpace />
    </div>
  );
}

export default App;
