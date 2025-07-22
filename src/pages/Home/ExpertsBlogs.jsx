import './ExpertsBlogs.css';

import doc1 from '../../assets/Experts/e1.png';
import doc2 from '../../assets/Experts/e2.png';
import doc3 from '../../assets/Experts/e3.png';
import mobile from '../../assets/Experts/Mobile.png';
import m1 from '../../assets/Experts/GoogleBadge.png';
import m2 from '../../assets/Experts/AppStore.png';
// import star from '../../assets/Experts/Star.png';
import b1 from '../../assets/Blogs/b1.png';
import b2 from '../../assets/Blogs/b2.png';
import b3 from '../../assets/Blogs/b3.png';


function ExpertsBlogs() {
  const experts = [
    {
      img: doc1,
      name: 'Docter Name',
      specialty: 'Natural Pregnancy, +10 Years',
      location: 'New Delhi',
    },
    {
      img: doc2,
      name: 'Docter Name',
      specialty: 'Natural Pregnancy, +10 Years',
      location: 'New Delhi',
    },
    {
      img: doc3,
      name: 'Docter Name',
      specialty: 'Natural Pregnancy, +10 Years',
      location: 'New Delhi',
    },
    {
      img: doc1,
      name: 'Docter Name',
      specialty: 'Natural Pregnancy, +10 Years',
      location: 'New Delhi',
    }
  ];

  const blogData = [
  { img: b1, title: "Refugees From Tanzania Asked Help From Fertility Dost" },
  { img: b2, title: "Refugees From Tanzania Asked Help From Fertility Dost" },
  { img: b3, title: "Refugees From Tanzania Asked Help From Fertility Dost" },
];

  return (
    <div className="body4-section py-5">
      <div className="container">
        <h3 className="text-center mb-5 fw-semibold">
          A Team Of <span className="text-primary">Experts Dost</span>
        </h3>

        <div className="row text-center mb-3 gap-0">
          {experts.map((expert, i) => (
            <div key={i} className="col-md-3 mb-4">
              <div className="card p-0 h-100">
                <img src={expert.img} alt={`Dr. ${expert.name}`} className="card-img-top rounded" style={{ objectFit: 'fill', height: '275px' }} />
                <div className="card-body">
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                    <img src="" alt="" style={{ width: '20px' }} />
                    <span className="badge bg-danger rounded-circle text-white">09</span>
                  </div>
                  <h6 className="fw-semibold">{expert.name}</h6>
                  <p className="mb-1 small text-muted">{expert.specialty}</p>
                  <p className="text-muted small">{expert.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile App Section */}
        <div className="row align-items-center mb-5 pt-0 rounded bg-light-blue">
          <div className="col-md-5 text-center bg-dark-blue min-vh-25">
            <img src={mobile} alt="Mobile App Mockup" className="img-fluid pt-5" />
          </div>
          <div className="content col-md-6 text-center ">
            <h4 className="fw-semibold mb-4">
              Why You Should <br />
              <span className="text-primary">Download Our Mobile App</span>
            </h4>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="bg-white text-dark p-2">Progress Tracking</span>
              <span className="bg-white text-dark p-2">Expert Counselling</span>
              <span className="bg-white text-dark p-2">Fertility Diet Plans</span>
              <span className="bg-white text-dark p-2">Yoga Sessions</span>
              <span className="bg-white text-dark p-2">IUI & IVF Support</span>
              <span className="bg-white text-dark p-2">Doctor Matching</span>
            </div>
            <div className="d-flex gap-3">
              <img src={m1} alt="Google Play Badge" style={{ height: '40px' }} />
              <img src={m2} alt="App Store Badge" style={{ height: '40px' }} />
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <h4 className="text-center fw-semibold mb-4">
          Stay Updated with <span className="text-primary">Our Blogs</span>
        </h4>
        <div className="row text-center mb-4">
          {blogData.map((blog, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={blog.img} alt="Blog Preview" className="card-img-top rounded img-fluid" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h6 className="fw-semibold">{blog.title}</h6>
                  <p className="text-muted small mb-0">
                    I work in corporate sector & undergo huge stress plus... <span className="text-primary">Read More</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center">
          <button className="btn btn-outline-primary">View All Blogs</button>
        </div>

      </div>
    </div>
  );
}
export default ExpertsBlogs;