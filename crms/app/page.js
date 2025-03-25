import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="main-intro">
                    <h1>Canine registration<br />and<br />management system</h1>
                    <a href="/login">get started</a>
                </div>
            </main>
        </div>
    );
}
