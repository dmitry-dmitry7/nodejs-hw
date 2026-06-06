import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const notesRoutes = Router();

// Маршрут GET /notes — список усіх нотатків
notesRoutes.get('/notes', getAllNotes);

// Маршрут GET /notes/:noteId — одна нотатка за id
notesRoutes.get('/notes/:noteId', getNoteById);

// Маршрут POST /notes — створити нову нотатку
notesRoutes.post('/notes', createNote);

//Маршрут DELETE /notes/:noteId — видалити існуючу нотатку за її ідентифікатором
notesRoutes.delete('/notes/:noteId', deleteNote);

//Маршрут PATCH /notes/:noteId — оновити існуючу нотатку за її ідентифікатором
notesRoutes.patch('/notes/:noteId', updateNote);

export default notesRoutes;
