import './HeroSection.css';

function HeroSection({ data}) {
  return (
    <section className="hero-section d-flex align-items-center position-relative text-dark">

      <div className="container py-5">
        <div className="row text-center text-md-start">
          <div className="col-md-2 col-lg-7">
            <h2 className="mb-2">{data.title}</h2>
            <i className="mb-4 d-block">{data.subtitle}</i>

            <h1 className="hero-title mb-3">
              “Your <span><div className="highlight">Personalised</div> Fertility Coach”</span>
            </h1>

            <button className="btn btn-light px-4 py-2 fw-semibold shadow-sm mt-2">
              Book Your Appointment
            </button>
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
