import React from "react";
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteWrapper = styled.div`
  background: #dbe2ef;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;
  > h2 {
    font-size: 1.1em;
    margin-bottom: 6px;
  }
  > p {
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
  } 
  > button {
  position: relative;
  float: right;
  margin-right: 10px;
  color: #3f72af;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  outline: none;
}
`;

const Note = (props) => {

  const handleClick = () => {
    props.onDelete(props.id);
  }

  return(
    <NoteWrapper>
      <h2> {props.title}</h2>
      <p> {props.content}</p>
      <button onClick={handleClick}>
          <DeleteIcon />
      </button>
    </NoteWrapper>
  );
}

export default Note; 