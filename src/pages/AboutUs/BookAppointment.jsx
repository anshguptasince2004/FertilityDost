import "./BookAppointment.css";
import pregnantImage from "../../assets/AboutUs/Designed Circle.png";
import ButtonWithHover from "../../assets/ButtonWithHover";

function BookAppointment() {
    return (
        <div className="appointment-wrapper py-5">
            <h2 className="main-heading mb-2 text-center">
                We Would Like To Help Couples Fulfill Their<br />
                <span className="text-pink">Dreams Of Starting A Family</span>
            </h2>
            <div className="row justify-content-center align-items-center custom-row">

                <div className="col-lg-5 col-md-6 text-center mb-4 mb-md-0">
                    <div className="dna-frame">
                        <img src={pregnantImage} alt="Pregnant Woman" className="img-fluid" />
                    </div>
                </div>


                <div className="col-lg-6 col-md-6 pt-4">
                    <p>
                        It is a long established fact that a reader will be distracted <br />by
                        the readable content of a page when looking at its <br />layout. The point
                        of using Lorem Ipsum is that it has a <br /> more-or-less normal distribution
                        of letters, as opposed to <br /> using 'Content here, content here', making
                        it look like <br /> readable English. Many desktop publishing packages and <br />
                        web page editors now use Lorem Ipsum as their default <br />model text, and a search for 'lorem ipsum' will uncover <br />
                        many web sites still in their infancy.
                    </p>
                    <p>
                        It is a long established fact that a reader will be <br /> distracted by
                        the readable content of a page when <br /> looking at its layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal distribution of letters <br />
                    </p>
                </div>
            </div>
            <div className="text-center">
                <ButtonWithHover />
            </div>
        </div>
    );
}

export default BookAppointment;
