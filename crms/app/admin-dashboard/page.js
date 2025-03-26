'use client';

import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default function AdminDashboard() {
    return (
        <div>
            <header className="header-main">
                <div className="header-main-logo">
                    <Image src="/img/seal.svg" alt="canine" width={50} height={50} />
                    <nav className="header-main-nav">
                        <ul>
                            <li><Link href="/admin-dashboard/crud">EDIT DATA</Link></li>
                            <li><Link href="/admin-dashboard/userlist">USER SETTINGS</Link></li>
                            <li><LogoutButton /></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className="main-intro">
                    <h1>Canine Registration<br />and<br />Management System</h1>
                    <Link href="/admin-dashboard/register">Registration</Link>
                </div>
            </main>

            <section className="index-category">
                <p>Explore</p>
                <Link href="/admin-dashboard/map" className="index-category-box">
                    <div className="overlay"></div>
                    <h3>Map Overview</h3>
                </Link>
                <Link href="/admin-dashboard/town" className="index-category-box">
                    <div className="overlay"></div>
                    <h3>Barangay Data Visualization</h3>
                </Link>
            </section>
        </div>
    );
}
