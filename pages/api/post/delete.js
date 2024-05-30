import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        let db = (await connectDB).db('forum');
        let result = await db.collection('post1').deleteOne({ _id: new ObjectId(req.query.id) });
        return res.redirect(200, 'list').json(result);
    }
}
