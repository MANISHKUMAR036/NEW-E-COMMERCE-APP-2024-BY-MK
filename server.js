import express from 'express'; 
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
dotenv.config();

//database config
connectDB();

// Create an Express application
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

// Define a REST API endpoint
app.get('/', (req, res) => {
    res.send({
        message: "welcome to ecommerce app",
    });
});

// Set the port, defaulting to 4000 if not specified in the environment variables
const PORT = process.env.PORT || 4000;

// Run the server and listen on the specified port

 app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`.green); // using colors to color the console message
 });
 
