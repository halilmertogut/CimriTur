require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;
const port = process.env.PORT || 3000;

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  imageUrl: String,
});

const User = mongoose.model('User', userSchema);

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  try {
    const { name, email, password, imageUrl } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ message: 'Email already in use' });
    }

    const newUser = new User({ name, email, password, imageUrl });
    await newUser.save();

    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    res.send({ token, user });
  } catch (error) {
    res.status(500).send(error);
  }
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.userId = decoded.userId;
    next();
  });
};

app.get('/validateToken', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).send({ message: 'Kullanıcı bulunamadı.' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).send({ message: 'Token doğrulama sırasında bir hata oluştu.', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
