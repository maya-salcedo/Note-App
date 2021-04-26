import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Note from './Note';
import axios from 'axios';

const AllNotesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

const Notes = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get('/api/createNote');
      setList(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  const deleteItem = async id => {
    try {
      await axios.delete(`/api/createNote/${id}`);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <AllNotesWrapper>
        {list.map((noteItem) => {
          return <Note 
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          dateStamp={noteItem.datestamp}
          onDelete={deleteItem}
          />
        })}
      </AllNotesWrapper>
      
    </div>);
}

export default Notes;