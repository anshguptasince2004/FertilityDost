import './ReasonsSection.css';
import r1 from '../../assets/Reasons/r1.png';
import r2 from '../../assets/Reasons/r2.png';
import r3 from '../../assets/Reasons/r3.png';
import r4 from '../../assets/Reasons/r4.png';
import r5 from '../../assets/Reasons/r5.png';

function ReasonsSection() {
  return (
    <>
      <div className="struggle-text text-center py-5">
        <h4 className="fw-semibold text-dark">
          Are You Struggling With<span className="highlight">Infertility?</span>
        </h4>
      </div>

      <section className="infertility-reasons-section py-5">
        <div className="container-lg">
          <div className="inner-content mx-auto px-3 px-md-5" style={{ maxWidth: '1000px' }}>
            
            {/* Reason 1 */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 position-relative">
                <img src={r1} alt="Woman feeling stressed" className="img-fluid rounded reason-image" />
                <div className="reason-badge1">01</div>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold reason-title">Problems Conceiving <br />& Late Pregnancy</h5>
                <p>It is extremely difficult to pin-point a single cause <br /> for failed conception since there are so many <br /> factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age.</p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="row align-items-center mb-5 flex-md-row-reverse">
              <div className="col-md-6 position-relative">
                <img src={r2} alt="Feet on scale with measuring tape" className="img-fluid rounded reason-image" />
                <div className="reason-badge">02</div>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold reason-title">Weight Gaining &<br /> Loosing Issue</h5>
                <p>Weight issues might lead to delayed <br />pregnancy or hormonal fluctuations leading <br />to infertility. Manage it with Fertility Diet <br />and Yoga Exercises.</p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 position-relative">
                <img src={r3} alt="Ultrasound image during pregnancy" className="img-fluid rounded reason-image" />
                <div className="reason-badge1">03</div>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold reason-title">Lack of Awareness <br />Regarding IUI or IVF</h5>
                <p>It is extremely difficult to pin-point a single cause <br /> for failed conception since there are so many <br />factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age.</p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="row align-items-center mb-5 flex-md-row-reverse">
              <div className="col-md-6 position-relative">
                <img src={r4} alt="PCOS diagnosis with uterus model" className="img-fluid rounded reason-image" />
                <div className="reason-badge">04</div>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold reason-title">PCOS Related Issues</h5>
                <p>1/6 women suffer from PCOS. Natural <br /> pregnancy is possible with guided planner <br />and lifestyle changes. Manage it with our <br /> PCOS Support Program.</p>
              </div>
            </div>

            {/* Reason 5 */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 position-relative">
                <img src={r5} alt="Sperm and egg under microscope" className="img-fluid rounded reason-image" />
                <div className="reason-badge1">05</div>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold reason-title">Male Infertility</h5>
                <p>It is extremely difficult to pin-point a single cause <br />for failed conception since there are so many <br />factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default ReasonsSection;