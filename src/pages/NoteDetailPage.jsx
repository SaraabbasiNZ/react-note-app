import { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./NoteDetailPage.css"
import { Link } from 'react-router-dom';

const NoteDetailPage = () => {

  const [note, setNote] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/${slug}`)
      .then((res) => {
        setNote(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]);


  return (
    <div className="note-container">
    <h3 className="title">{note.title}</h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> created:  {FormatDate(note.created)}</p>
    <p className="note-date font-12 text-muted me-5">last updated: {FormatDate(note.updated)}</p>
    </span>
    <span className="button-group">
        <Link to="/edit-note">
        <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
        </Link>
      
      <button className="btn btn-danger"><BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="description">
      {note.body}
    </p>



    

  </div>
  )
}

export default NoteDetailPage