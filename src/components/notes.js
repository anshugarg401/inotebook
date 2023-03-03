import React, { useContext ,useEffect,useRef,useState} from "react";
import NotesItems from "./NotesItems";
import notecontext from "../context/note/NoteContext";
import AddNote from "./AddNote";


  
  const Notes = () => {
    const context = useContext(notecontext);
  const { note,fetchnote,EditNote} = context;
  const [notes, setnotes] = useState({ id : "", etitle: "", ediscription: "", etag: "" });
  const HandleClick = (e) =>{
    EditNote(notes.id,notes.etitle,notes.ediscription,notes.etag);
    refclose.current.click();
    // e.preventDefault()
   
  };
  const OnChange = (e) => {
    setnotes({...notes,  [e.target.name]: e.target.value });
  };
    useEffect(() => {
    
        fetchnote();
         //eslint-disable-next-line
  }, [])
  const ref = useRef(null);
  const refclose = useRef(null);
  const updatenote = (currentnote)=>{
    ref.current.click();
    setnotes({ id : currentnote._id ,etitle:currentnote.title ,ediscription:currentnote.discription ,etag: currentnote.tag});
    
  }

  return (
    <>

<button ref = {ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
      
        
      </div>
      <form className="my-3">
        <div className=" container">
          <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={notes.etitle}
            type="text"
            className="form-control"
            id="title"
            name="etitle"
            placeholder="Write your title here"
            onChange={OnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Discription
          </label>
          <textarea
value={notes.ediscription}
            className="form-control"
            id="discription"
            name="ediscription"
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
          value={notes.etag}
            type="text"
            className="form-control"
            id="tag"
            name="etag"
            placeholder="Write your tag here"
            onChange={OnChange}
          />
        </div>
        </div>
      </form>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref = {refclose} >Close</button>
        <button type="button" className="btn btn-primary" onClick={HandleClick} disabled = {notes.etitle.length < 5 || notes.ediscription.length <5 } >update note</button>
      </div>
    </div>
  </div>
</div>
    <AddNote/>
    <div className="row  ">
    <h2>Your notes</h2>
    <div className="container mx-2 ">
      {note.length === 0 && "add your notes now"}
    </div>
   
      {note.map((notes) => {
        return <NotesItems  key = {notes._id} note = {notes} updatenote = {updatenote} />
      })};
      
    </div>
    </>
  );
};
export default Notes;
