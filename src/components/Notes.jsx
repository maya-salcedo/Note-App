import React, { useState } from "react";
import styled from 'styled-components';
import Note from "./Note";
import CreateNote from "./CreateNote";

const AllNotesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

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
      <AllNotesWrapper>
        {items.map((noteItem, index) => {
          return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
          />
        })}
      </AllNotesWrapper>
      
    </div>);
}

export default Notes;