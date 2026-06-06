import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middleware логування
app.use(logger);

// Middleware для парсингу JSON
app.use(express.json());

// Middleware дозволяє запити з будь-яких джерел
app.use(cors());

// підключаємо групу маршрутів нотатки
app.use(notesRoutes);

// Middleware 404  — якщо маршрут не знайдено (після всіх маршрутів)
app.use(notFoundHandler);

// Middleware Error — якщо під час запиту виникла помилка
app.use(errorHandler);

// підключення до MongoDB
await connectMongoDB();

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
