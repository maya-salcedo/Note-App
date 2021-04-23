import React, { useState } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";

const Notes = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(prevItems => {
        return [...prevItems, newItem];
    });
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
        return prevItems.filter((noteItem, index) => {
            return index !== id;
        });
    });
  }

  return (
      <div>
        <CreateNote onAdd={addItem} />
        {items.map((noteItem, index) => {
            return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
            />
        })}
      </div>);
}

export default Notes;