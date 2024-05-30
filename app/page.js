import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import List from './list/page';

export default function Home() {
    return (
        <main>
            <List />
        </main>
    );
}
