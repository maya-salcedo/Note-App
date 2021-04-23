import React, { useState } from "react";
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const FormWrapper = styled.form`
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);
  > input, textarea {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }
  > button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #3f72af;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  }
`;

const CreateNote = (props) => {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = (event) => {
    props.onAdd(note); //equivalent to calling the addNote in App.jsx
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  const expand = () => {
      setExpanded(true);
  }

  return (
  <div>
    <FormWrapper>
    {isExpanded && (<input 
          name="title" 
          onChange={handleChange} 
          value={note.title} 
          placeholder="Title" />)}
      
      <textarea 
          name="content" 
          onClick={expand}
          onChange={handleChange} 
          value={note.content} 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1}  />
      <Zoom in={isExpanded}>
      <Fab onClick={submitNote}><AddIcon /></Fab>
      </Zoom>
    </FormWrapper>
  </div>
);
}

export default CreateNote;
