import React from "react";
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteWrapper = styled.div`
  background: #dbe2ef;
  border-radius: 7px;
  padding: 1rem;
  width: 300px;
  margin: 1.5rem 2rem;
  float: left;
  > h2 {
    font-size: 1.3em;
    margin-bottom: 6px;
  }
  > p {
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  } 
  > h6 {
    color: #3f72af;
    position: relative;
    float: left;
    margin-bottom: 4px;
    font-weight: 400;
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
    background: #dbe2ef;
}
`;

const Note = (props) => {

  const handleClick = () => {
    props.onDelete(props.id);
  }

  return(
      <NoteWrapper key={props.id}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <h6>Added on {props.dateStamp}</h6>
        <button onClick={handleClick}><DeleteIcon /></button>
      </NoteWrapper>
  );
}

export default Note; 