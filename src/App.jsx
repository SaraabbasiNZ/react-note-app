import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from 'axios'


const App = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get("https://8000-saraabbasin-simplenotep-mybof7hzgwz.ws.codeinstitute-ide.net/notes/")
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage notes={notes} />} />
      <Route path= "/add-note" element={<AddNotePage />} />
      <Route path= "/edit-note" element={<EditNotePage/>} />
      <Route path= "/note-detail" element={<NoteDetailPage />} />
    </Route>
    
  ))

  return <RouterProvider router={router} />

}

export default App