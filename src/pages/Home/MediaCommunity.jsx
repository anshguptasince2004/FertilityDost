import './MediaCommunity.css';
import img from '../../assets/SocialMedia.png';

function MediaCommunity() {
    return (
        <div className="body5-section">

            <div className="bg-light-blue py-5 text-center">
                <h4 className="fw-semibold">Your Dost <span className="text-primary">In Media</span></h4>
                <div className="container mt-4">
                    <div className="row justify-content-center align-items-center g-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <img src="" alt="Media Logo" className="img-fluid grayscale-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container my-5 text-center" id='Carousal'>
                <h4 className="fw-semibold">Join Our <span className="text-primary">Community</span></h4>

                <div id="communityCarousel" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000">

                    <div className="carousel-inner">

                        {[1, 2, 3, 4].map((_, i) => (
                            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                <div className="card p-3 mx-auto carousel-card">
                                    <div className="row g-3 align-items-center">
                                   
                                        <div className="col-12 col-md-4 position-relative">
                                            <img src={img} alt="Testimonial" className="img-fluid rounded" />
                                            <button className="btn btn-light position-absolute top-50 start-50 translate-middle p-1 rounded-circle shadow">
                                                
                                            </button>
                                        </div>    <div className="col-12 col-md-8 text-start">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src={img} alt="User Avatar" className="rounded-circle me-2" style={{ width: '35px', height: '35px' }} />
                                                <strong>“ Harpreet ”</strong>
                                            </div>
                                            <p className="text-muted small mb-0">
                                                I work in corporate sector & undergo huge stress plus hormonal issues...
                                                <span className="text-primary"> Read More</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

          
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button className="btn btn-outline-dark">View All Reviews</button>
                    <button className="btn btn-outline-primary">View All Youtube Videos</button>
                </div>
            </div>
        </div>
    );
}
export default MediaCommunity;