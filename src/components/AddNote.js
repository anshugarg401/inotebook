import React, { useContext, useState } from "react";

import notecontext from "../context/note/NoteContext";

const AddNote = () => {
  const context = useContext(notecontext);
  const { addnote } = context;
  const [notes, setnotes] = useState({ title: "", discription: "", tag: "" });
  const HandleClick = (e) =>{
    e.preventDefault()
    addnote(notes.title,notes.discription,notes.tag);
    setnotes({ title: "", discription: "", tag: "" });
  };
  const OnChange = (e) => {
    setnotes({...notes,  [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h1 className="my-4">Add a note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
value = {notes.title}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Write your title here"
            onChange={OnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Discription
          </label>
          <textarea
value = {notes.discription}
            className="form-control"
            id="discription"
            name="discription"
            rows="3"
            placeholder="Write your Discription"
            onChange={OnChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
value = {notes.tag}          
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Write your tag here"
            onChange={OnChange}
          />
        </div>
      </form>
      <button disabled = {notes.title.length <5 || notes.discription.length <5 } type="button" className="btn btn-primary" onClick={HandleClick}>
        submit
      </button>
    
    </div>
  );
};

export default AddNote;
