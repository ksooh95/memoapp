'use client';

import { signIn } from 'next-auth/react';

export default function TopMenu({ session }) {
    // console.log(session);
    return (
        <div>
            <div className="top_menu">
                <button
                    onClick={() => {
                        signIn();
                    }}
                >
                    로그인
                    {session?.user.name}
                </button>
            </div>
        </div>
    );
}
