import mongoose from 'mongoose';
import BinLocation from '../../models/BinLocation';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return; // Already connected
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'GET') {
        try {
            const binLocations = await BinLocation.find({});
            res.status(200).json(binLocations);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve bin locations' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
