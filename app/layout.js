import { Inter } from 'next/font/google';
import './globals.css';
import TopMenu from './topMenu';
import TopMenu2 from './topMenu2';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);
    console.log('session :', session);
    return (
        <html lang="en">
            <body>
                {session == null ? <TopMenu session={session} /> : <TopMenu2 session={session} />}
                <div className="bg">
                    <img src="/img/bg.jpeg" alt="메인 배경 이미지" />
                </div>
                {children}
            </body>
        </html>
    );
}
