import Header from '../../components/Header';

export default function About() {
    return (
        <div>
            <Header />
            <main>
                <div className="index-about">
                    <div className="wrapper-main index-about-flex">
                        <div className="index-about-img">
                            <img src="/img/abou.jpg" alt="vadno" />
                        </div>

                        <div className="index-about-txt">
                            <h1>About the Creator</h1>
                            <p>Jun Davon B. Hamoay is a 4th Year Student at Bohol Island State University - Bilar Campus <br /><br />
                                He is currently taking the course of Bachelor of Science in Computer Science
                            </p>
                            <a href="#">Know More</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
