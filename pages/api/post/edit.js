import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        let db = (await connectDB).db('forum');
        let result = await db.collection('post1').findOne({ _id: new ObjectId(req.query.id) });
        return res.status(200).json(result);
    } else if (req.method == 'PUT') {
        console.log(JSON.parse(req.body));
        let parseBody = JSON.parse(req.body);
        let update = { title: parseBody.title, text: parseBody.text };
        let db = (await connectDB).db('forum');
        let result = await db.collection('post1').updateOne({ _id: new ObjectId(req.query.id) }, { $set: update });
        return res.status(200).json(result);
    }
}
