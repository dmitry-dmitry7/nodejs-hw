import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  noteIdSchema,
  getAllNotesSchema,
  createNoteSchema,
} from '../validations/notesValidation.js';

const notesRoutes = Router();

// Маршрут GET /notes — список усіх нотатків
notesRoutes.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

// Маршрут GET /notes/:noteId — одна нотатка за id
notesRoutes.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

// Маршрут POST /notes — створити нову нотатку
notesRoutes.post('/notes', celebrate(createNoteSchema), createNote);

//Маршрут DELETE /notes/:noteId — видалити існуючу нотатку за її ідентифікатором
notesRoutes.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

//Маршрут PATCH /notes/:noteId — оновити існуючу нотатку за її ідентифікатором
notesRoutes.patch('/notes/:noteId', updateNote);

export default notesRoutes;
