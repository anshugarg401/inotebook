import React ,{useContext}from "react";
import notecontext from "../context/note/NoteContext";
const NotesItems = (props) => {
    const context = useContext(notecontext);
  const { DeleteNote } = context;
  const { note , updatenote} = props;
 
  return (
    <div className="card my-4 w-25 p-3  mx-3">
      <div className="card-body">
        <div className="d-flex align-item-center " id="cardflex">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{DeleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>

          <p className="card-text">{note.discription}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesItems;
