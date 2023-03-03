import notecontext from "./NoteContext";
import React from "react";
import { useState } from "react";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const initialnote = [];
  const [note, setnote] = useState(initialnote);
  // const si = {

  //     "name" : "anshu garg",
  //     "class":"5c"
  // }
  // const [state, setstate] = useState(si)
  // const update = ()=>{
  //     setTimeout(() => {
  //     setstate(
  //         {
  //             "name":"manav garg",
  //             "class":"6d"
  //         }
  //     )
  //     }, 1000);
  // }

  // fetch all notes
  const fetchnote = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTJjYjRmZTYwN2UwNzZkODhkYWFkIn0sImlhdCI6MTY0NjIxNDYxMn0.0z0KxxCgPiFidgTvewJK0IBdItA5HjCtPqCzyZDlRQM",
      },

     
    });
    const json = await response.json();
    
    setnote(json);
    
}
  // add a note
  const addnote = async (title, discription, tag = "default") => {
    // api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTJjYjRmZTYwN2UwNzZkODhkYWFkIn0sImlhdCI6MTY0NjIxNDYxMn0.0z0KxxCgPiFidgTvewJK0IBdItA5HjCtPqCzyZDlRQM",
      },
      
      body: JSON.stringify({title, discription, tag}),
    });
    const json = await response.json();
    const notes = json;
    setnote(note.concat(notes));
  };
  // delete a note
  const DeleteNote = async (id) => {
    
    const newNote = note.filter((note) => {
      return note._id !== id;
    });
    setnote(newNote);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTJjYjRmZTYwN2UwNzZkODhkYWFkIn0sImlhdCI6MTY0NjIxNDYxMn0.0z0KxxCgPiFidgTvewJK0IBdItA5HjCtPqCzyZDlRQM",
        },
    });
  
    
  };
  // edit a note
  const EditNote = async (id, title, discription, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTJjYjRmZTYwN2UwNzZkODhkYWFkIn0sImlhdCI6MTY0NjIxNDYxMn0.0z0KxxCgPiFidgTvewJK0IBdItA5HjCtPqCzyZDlRQM",
      },
      body: JSON.stringify({title, discription, tag})
      
    });
    // const json = await response.json();

    // login to edit credencials
    const newNote = JSON.parse(JSON.stringify(note))
    for (let index = 0; index < note.length; index++) {
      if (newNote[index]._id === id) {
        newNote[index].title = title;
        newNote[index].discription = discription;
        newNote[index].tag = tag;
        break;
      }
    }
    setnote(newNote);
    
  };

  return (
    <notecontext.Provider value={{ note, addnote, DeleteNote, EditNote,fetchnote }}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Notestate;
