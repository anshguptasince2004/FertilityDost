import logo from '../../assets/FertilityDostLogo1.png';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <div className="why-choose-us-section py-5 position-relative bg-light-blue">

      <div className="angled-top"></div>

      <div className="container text-center">
        <h6 className="text-info fw-semibold">WHY CHOOSE US</h6>
        <br />
        <h3 className="fw-semibold mt-2">
          Did You Know? <span className="text">33 Million People</span> Suffer From Infertility
        </h3>

        <p className="friend mt-3">
          You Have a Friend : 
          <img src={logo} alt="Fertility Dost Logo" style={{ height: '35px', marginLeft: '15px' }} />
        </p>

        <div className="row mt-5 g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100 text-start">
              <h2 className="text-muted fw-bold mb-2">01.</h2>
              <h6 className="fw-semibold">Consult With Expert Coaches</h6>
              <p className="text-muted small">
                It is extremely difficult to pin-point a single cause for failed conception since there are many factors
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100 text-start">
              <h2 className="text-dark fw-bold mb-2">02.</h2>
              <h6 className="fw-semibold">Support Via Audio & Video Call</h6>
              <p className="text-muted small">
                It is extremely difficult to pin-point a single cause for failed conception since there are many factors
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100 text-start">
              <h2 className="text-muted fw-bold mb-2">03.</h2>
              <h6 className="fw-semibold">Personalized Care Plans & Goal Tracking</h6>
              <p className="text-muted small">
                It is extremely difficult to pin-point a single cause for failed conception since there are many factors
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100 text-start">
              <h2 className="text-muted fw-bold mb-2">04.</h2>
              <h6 className="fw-semibold">Get Specialised Resources / Treatment</h6>
              <p className="text-muted small">
                It is extremely difficult to pin-point a single cause for failed conception since there are many factors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyChooseUs;