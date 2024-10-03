import axios from 'axios';
import { API_BASE_URL } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
});


// Notes API
export const getNotes = () => api.get('/notes/');
export const createNote = (data) => api.post('/notes/', data);
export const updateNote = (slug, data) => api.put(`/notes/${slug}/`, data);
export const deleteNote = (slug) => api.delete(`/notes/${slug}/`);
export const searchNotes = (query) => api.get(`/notes-search/?search=${query}`);


// Authentication API
export const registerUser = (data) => api.post('/register/', data);
export const loginUser = (data) => api.post('/token/', data);

export default api;