import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Notes({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <Card key={note.id}>
          <Card.Text>{` ${note.id} ${note.todo}`}</Card.Text>
          <Button>Click me</Button>
        </Card>
      ))}
    </div>
  );
}
