import "./testimonials.scss"
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/headings/ScreenHeading'

export default function Testimonials() {
    return (
        <div className = "testimonial" id="testimonials">
            <div className="testimonial-container">
                <div className='title'>
                    <ScreenHeading title={"Testimonials"} subHeading={"What colleagues say about me."} />
                </div>
                <div className="row">
                    <OwlCarousel className="owl-carousel" id="testimonial-carousel">
                        <div className="carousel-container">
                            <div className="testimonial-item">
                                <div className="testimonial-comment">
                                    <p>
                                        <i className="fa fa-quote-left" />
                                        Christie is the best!
                                        <i className="fa fa-quote-right" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}
