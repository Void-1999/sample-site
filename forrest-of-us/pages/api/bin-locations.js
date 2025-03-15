// pages/api/bin-locations.js
import mongoose from 'mongoose';
require('dotenv').config();
import BinLocation from '../../models/BinLocation';

mongoose.connect(process.env.MongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const binLocations = await BinLocation.find({});
      res.status(200).json(binLocations);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bin locations' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}