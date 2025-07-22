import './HeroSection.css';
import aboutImage from '../../assets/AboutUs/Parents.png';

function HeroSection() {
    return (
        <section className="about-section">
            <div className="container py">
                <div className="row align-items-center">
                    <div className="col-md-6 text-light text-content">
                        <h2 className="mb-3">Know About <br />Fertility Dost</h2>
                        <p className="lead">
                            Contrary to popular belief, Lorem Ipsum <br /> is not simply random text. It has roots in a <br /> piece of classical Latin literature.
                        </p>
                    </div>
                    <div className="col-md-6 image-container">
                        <img src={aboutImage} alt="Couple" className="about-image" />
                    </div>
                </div>
            </div>
            <div className="curve-shape">
                <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 C720,80 720,80 1440,0 L1440,150 L0,150 Z" fill="#ffffffff" />
                </svg>
            </div>
        </section>
    );
}

export default HeroSection;
