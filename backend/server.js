import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userrouter.js';
import bookingRoutes from './routes/bookingroutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;

// CORS setup to allow requests from specific origins
const corsOptions = {
  origin: ['https://madheshwaraenterprices.vercel.app', 'http://localhost:4000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, headers, etc.)
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware with specified options
app.use(express.json()); // Middleware to parse JSON request bodies

// Mount the routes
app.use('/api/users', userRoutes);
app.use('/api', bookingRoutes); // Booking routes are now properly mounted

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected:', mongoose.connection.host))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
