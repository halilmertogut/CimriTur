require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const tourRoutes = require('./src/routes/tourRoutes');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', authRoutes); 
app.use('/api/user', userRoutes);
app.use('/api/tour', tourRoutes);

app.get('/', (req, res) => {
  res.send('Hello from CimriTur backend server!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
