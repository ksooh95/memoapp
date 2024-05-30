'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Write() {
    const today = new Date();
    // 현재 날짜를 가져옵니다.
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // 원하는 형식으로 날짜를 설정합니다.
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const router = useRouter();

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
                                console.log(title);
                            }}
                            defaultValue={title}
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
                                console.log(text);
                            }}
                            defaultValue={text}
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
                                if (title.trim() == '') {
                                    alert('제목이 빈칸입니다.');
                                } else if (text.trim() == '') {
                                    alert('내용이 빈칸입니다');
                                } else {
                                    fetch('/api/post/write', {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            title: title,
                                            text: text,
                                            time: formattedDate,
                                        }),
                                    }).then(() => {
                                        router.push('list');
                                    });
                                }
                            }}
                        >
                            작성
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
