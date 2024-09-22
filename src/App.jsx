import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from 'axios'
import { toast } from "react-toastify";


const App = () => {

  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleFilterText = (val) => {
    setFilterText(val);
  };

  const handelSearchText = (val) => {
    setSearchText(val);
  };

  const filteredNotes =
    filterText === "BUSINESS"
      ? notes.filter((note) => note.category == "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter((note) => note.category == "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter((note) => note.category == "IMPORTANT")
      : notes;

      useEffect(() => {
        if(searchText.length < 3) return;
        axios.get(`https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes-search/?search=${searchText}`)
        .then(res => {
          console.log(res.data)
          setNotes(res.data)
        })
        .catch(err => console.log(err.message))
      }, [searchText])

  

  useEffect(() => {
    setIsLoading(true)
    axios.get("https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/")
    .then(res => {
      // console.log(res.data)
      setNotes(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])


  const addNote = (data) => {
    axios
      .post("https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/", data)
      .then((res) => {
        setNotes([...notes, data]);
        toast.success("A new note has been added");
        console.log(res.data);
      })

      .catch((err) => {
        console.log(console.log(err.message));
      });
  };

  const updateNote = (data, slug) => {
    axios
      .put(`https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Note updated succesfully");
      })

      .catch((err) => console.log(err.message));
  }

  const deleteNote = (slug) => {
    axios
      .delete(`https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/${slug}`)
      .catch((err) => console.log(err.message));
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout searchText={searchText} handelSearchText={handelSearchText} />}>
      <Route index element={<HomePage notes={filteredNotes} isLoading={isLoading} handleFilterText={handleFilterText} />} />
      <Route path= "/add-note" element={<AddNotePage addNote={addNote} />} />
      <Route path= "/edit-note" element={<EditNotePage updateNote={updateNote} />} />
      <Route path= "/notes/:slug" element={<NoteDetailPage />} />
    </Route>
    
  ))

  return <RouterProvider router={router} />

}

export default App