'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Write() {
    const today = new Date();
    // 현재 날짜를 가져옵니다.
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // 원하는 형식으로 날짜를 설정합니다.

    const [current, setCurrent] = useState({});
    useEffect(() => {
        fetch(`/api/post/edit?id=${params.id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setCurrent(data));
    }, []);
    const [title, setTitle] = useState(current.title);
    const [text, setText] = useState(current.text);

    const router = useRouter();
    const params = useParams();

    console.log(title);
    console.log(text);

    return (
        <div className="container">
            <div className="left">
                <div className="control_btn">
                    <button className="cb1"></button>
                    <button className="cb2"></button>
                    <button className="cb3"></button>
                </div>
                <div className="info">
                    <img src="/img/psa.png" alt="" />
                    <div className="info_r">
                        <h3>수환의 Note</h3>
                        <p>내 정보 보기</p>
                    </div>
                </div>
                <div className="menu">
                    <h5>개인 페이지</h5>
                    <ul>
                        <li>
                            <Link href="/list">MEMO</Link>
                        </li>
                        <li>
                            <Link href="/list">오늘의 일기</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="r_head">
                    <div className="r_head_menu">
                        <Link href="/list">목록</Link>
                        <Link href="/write">글쓰기</Link>
                    </div>
                    <div className="r_head_search"></div>
                </div>
                <div className="memo_body">
                    <div className="memo_write">
                        <input
                            type="text"
                            name="time"
                            defaultValue={formattedDate}
                            style={{
                                width: '100%',
                                border: 'none',
                                textAlign: 'center',
                                color: '#999',
                                marginBottom: '40px',
                                outline: 'none',
                            }}
                            readOnly
                        />
                        <input
                            type="text"
                            placeholder="메모제목"
                            name="title"
                            style={{
                                width: '100%',
                                border: 'none',
                                borderBottom: '1px solid #ddd',
                                textAlign: 'left',
                                color: '#333',
                                padding: '10px',
                                boxSizing: 'border-box',
                                outline: 'none',
                            }}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            defaultValue={current.title}
                        />
                        <textarea
                            name="text"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="메모내용"
                            style={{
                                width: '100%',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                textAlign: 'left',
                                color: '#333',
                                padding: '10px',
                                boxSizing: 'border-box',
                                resize: 'none',
                                outline: 'none',
                            }}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                            defaultValue={current.text}
                        ></textarea>
                        <button
                            style={{
                                border: '0',
                                padding: '5px 50px',
                                boxSizing: 'border-box',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                            type="submit"
                            onClick={() => {
                                if (title == '') {
                                    alert('제목이 빈칸입니다.');
                                } else if (text == '') {
                                    alert('내용이 빈칸입니다');
                                } else {
                                    fetch(`/api/post/edit?id=${params.id}`, {
                                        method: 'PUT',
                                        body: JSON.stringify({
                                            title: title,
                                            text: text,
                                            time: formattedDate,
                                        }),
                                    }).then(() => {
                                        alert('수정이 완료되었습니다.');
                                        router.push('/list');
                                    });
                                }
                            }}
                        >
                            수정
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
