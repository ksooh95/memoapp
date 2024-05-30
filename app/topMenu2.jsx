'use client';

import { signOut } from 'next-auth/react';

export default function TopMenu({ session }) {
    // console.log(session);
    return (
        <div>
            <div className="top_menu">
                <button
                    onClick={() => {
                        signOut();
                    }}
                >
                    로그아웃
                </button>
                {session?.user.name}
            </div>
        </div>
    );
}
