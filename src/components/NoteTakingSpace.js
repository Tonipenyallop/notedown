import React from "react";

export default function NoteTakingSpace({ isShown }) {
  return (
    <div>{isShown ? <input placeholder="NoteTakingSpace" /> : <div></div>}</div>
  );
}
