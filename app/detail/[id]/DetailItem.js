'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DetaiItem() {
    const [detail, setDetail] = useState();
    const params = useParams();
    const id = params.id.toString();
    const router = useRouter();

    console.log(id);

    useEffect(() => {
        fetch(`/api/detail?id=${id}`)
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }, []);
    console.log(detail);
    return (
        <div className="memo_detail">
            <div className="memo_time">{detail?.time}</div>
            <div className="memo_title">{detail?.title}</div>
            <div className="memo_text" style={{ marginBottom: '100px' }}>
                {detail?.text}
            </div>
            <Link
                href={`/edit/${id}`}
                style={{
                    border: '0',
                    padding: '5px 50px',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    marginRight: '15px',
                    textDecoration: 'none',
                    color: '#333',
                    background: '#efefef',
                    fontSize: '14px',
                    fontWeight: '500',
                }}
            >
                수정
            </Link>
            <button
                type="button"
                style={{
                    border: '0',
                    padding: '5px 50px',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    fetch(`/api/post/delete?id=${id}`, {
                        method: 'DELETE',
                    }).then(() => {
                        alert('삭제되었습니다.');
                        router.push('/list');
                    });
                }}
            >
                삭제
            </button>
        </div>
    );
}
