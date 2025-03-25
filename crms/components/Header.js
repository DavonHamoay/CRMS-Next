'use client'; // Add this to ensure it's client-side rendered

export default function Header() {
    return (
        <header className="header-main">
            <div className="header-main-logo">
                <img src="/img/seal.svg" alt="canine" />
                <nav className="header-main-nav">
                    <ul>
                        <li><a href="/login">LOG IN</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
