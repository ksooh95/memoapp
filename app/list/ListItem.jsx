'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ListItem() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/api/list', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);
    console.log('list', list);
    return (
        <>
            <h3 className="memo_body_title" style={{ textAlign: 'left' }}>
                MEMO LIST
            </h3>
            <ul className="memo_list">
                {list.map((a, i) => {
                    return (
                        <li key={i}>
                            <Link prefetch={false} href={'detail/' + a._id} style={{ textDecoration: 'none' }}>
                                {/* <Link prefetch={false} href={`detail?id=${a._id}/asd`} style={{ textDecoration: 'none' }}> */}
                                <span className="memo_title" style={{ color: '#333' }}>
                                    {a.title}
                                </span>
                                <span className="memo_content">
                                    <span className="memo_date">{a.time}</span>
                                    <span className="memo_text">{a.text}</span>
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
