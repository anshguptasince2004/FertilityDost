import './ProgramsEvents.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import img1 from '../../assets/Events/e1.png';
import img2 from '../../assets/Events/e2.png';
import img3 from '../../assets/Events/e3.png';

function ProgramsEvents() {
  const events = [
    {
      img: img1,
      title: "Urinary Issues During Midlife",
      date: "25 June, 2023",
      time: "04:00 PM - 06:00 PM",
      isLive: false,
    },
    {
      img: img2,
      title: "Urinary Issues During Midlife",
      date: "Happening Now",
      time: "04:00 PM - 06:00 PM",
      isLive: true,
    },
    {
      img: img3,
      title: "Urinary Issues During Midlife",
      date: "25 June, 2023",
      time: "04:00 PM - 06:00 PM",
      isLive: false,
    },
  ];

  return (
    <div className="body3-section py-5">
      <div className="container">

        {/* Recommended Programs Section */}
        <h4 className="text-center fw-semibold mb-4">
          Our Recommended <span className="text-primary">Programs</span> For You
        </h4>
        <div className="row g-4 justify-content-center">
          {[1, 2, 3].map((_, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-semibold">Natural Pregnancy Program</h5>
                  <p className="text-primary fw-semibold">6999/- (Per Month)</p>
                  <p className="small text-muted">
                    Avoid early miscarriages, delays and confusions by enrolling in pre-conception program.
                  </p>
                  <ul className="list-unstyled small">
                    <li className="mb-2">🔹 5 live Fertility Yoga or Meditation class</li>
                    <li className="mb-2">🔹 Get Daily Diet Chart</li>
                    <li className="mb-2">🔹 Get Ayurveda diagnosis & medicinal support</li>
                    <li className="mb-2">🔹 Weekly Review Call with Fertility Coach</li>
                  </ul>
                </div>
                <button className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline-primary'} w-100 mt-3`}>
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Events Section */}
        <div className="Events-section">
          <div className="angled-top my-5"></div>
          <div className="text-center">
            <p className="text-primary mb-1 fw-semibold">FERTILITY EVENTS</p>
            <h5 className="fw-semibold mb-4">
              Join Our Free <span className="text-primary">Events / Session</span>
            </h5>
          </div>

          <div className="row g-4 justify-content-center">
            {events.map((event, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <img src={event.img} alt="Event" className="card-img-top" />
                  <div className="card-body">
                    <h6 className="fw-semibold">{event.title}</h6>
                    <div className="d-flex align-items-center small text-muted mb-1">
                      <FaCalendarAlt className="me-2" />
                      {event.date}
                    </div>
                    <div className="d-flex align-items-center small text-muted">
                      <FaClock className="me-2" /> {event.time}
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0">
                    <button className={`btn ${event.isLive ? 'btn-primary' : 'btn-outline-primary'} w-100`}>
                      {event.isLive ? 'Join Now' : 'Register Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">View All Fertility Events</button>
        </div>
      </div>
    </div>
  );
}
export default ProgramsEvents;