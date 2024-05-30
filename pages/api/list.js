import { connectDB } from '@/util/database';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        let db = (await connectDB).db('forum');
        let result = await db.collection('post1').find().toArray();
        return res.status(200).json(result);
    }
}
