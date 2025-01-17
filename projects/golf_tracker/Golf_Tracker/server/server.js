import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import golfRoutes from './routes/golf.routes.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cookieParser(process.env.SECRET_KEY))
app.use(express.json(), cors({ origin: 'http://localhost:5173', credentials:true }));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', golfRoutes, userRoutes);



const PORT = process.env.PORT || 8000;

dbConnect();

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
