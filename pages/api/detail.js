import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    // console.log('dd :', req.query.id);
    if (req.method == 'GET') {
        let db = (await connectDB).db('forum');
        let result = await db.collection('post1').findOne({ _id: new ObjectId(req.query.id) });
        return res.status(200).json(result);
    }
}
