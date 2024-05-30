import { connectDB } from '@/util/database';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '') {
            return res.status(400).json('제목빈칸');
        } else if (req.body.text == '') {
            return res.status(400).json('내용빈칸');
        } else {
            let db = (await connectDB).db('forum');
            let result = await db.collection('post1').insertOne(JSON.parse(req.body));
            return res.status(200).json('작성완료');
        }
    }
}
