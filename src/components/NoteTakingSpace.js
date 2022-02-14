import React from "react";
import axios from "axios";

export default function NoteTakingSpace() {
  return (
    <div>
      <input
        type="text"
        placeholder="What to note?"
        className="right"
        id="input"
      />
      <button
        className="right"
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
