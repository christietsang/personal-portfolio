import React from "react";
import "./testimonials.scss"
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/headings/ScreenHeading'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export default function Testimonials() {

    const carousel_options = {
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        }
    }
    return (
        <div className="testimonial" id="testimonials">
            <div className="testimonial-container">
                <div className='title'>
                    <ScreenHeading title={"Testimonials"} subHeading={"What colleagues say about me."} />
                </div>
                <div className="bg-photo">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="testimonial-carousel"
                            {...carousel_options}>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <p>
                                            <FormatQuoteRoundedIcon className="quote-icon" />
                                            Christie is the best!
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" />
                                        </div>
                                        <h5>Jane Doe</h5>
                                        <p>Work Position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <p>
                                            <FormatQuoteRoundedIcon className="quote-icon" />
                                            Christie is the best!
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" />
                                        </div>
                                        <h5>Jane Doe</h5>
                                        <p>Work Position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <p>
                                            <FormatQuoteRoundedIcon className="quote-icon" />
                                            Christie is the best!
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" />
                                        </div>
                                        <h5>Jane Doe</h5>
                                        <p>Work Position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <p>
                                            <FormatQuoteRoundedIcon className="quote-icon" />
                                            Christie is the best!
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" />
                                        </div>
                                        <h5>Jane Doe</h5>
                                        <p>Work Position</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
