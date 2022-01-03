import React from "react";
import "./testimonials.scss"
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/headings/ScreenHeading'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import Footer from "../../assets/footerimage.png";
// import $ from 'jquery';

export default function Testimonials() {

    const carousel_options = {
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        autoplay: true,
        animateIn: "FadeInRight",
        animateOut: "FadeOutRight",
        smartSpeed: 1000,
        responsiveRefreshRate: 10,
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
    // OwlCarousel();

    // $(window).resize(function () {
    //     $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    //     $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();

    //     OwlCarousel();
    // });

    return (
        <div className="testimonial" id="testimonials">
            <div className="testimonial-container">
                <div className='title'>
                    <ScreenHeading title={"Testimonials"} subHeading={"What colleagues say about me."} />
                </div>
                <div className="bg-photo">
                    <div id="overlay"></div>
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="testimonial-carousel"{...carousel_options}>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <FormatQuoteRoundedIcon className="quote-icon" />
                                        <p>
                                            Christie is a great team member. She's very organized, detail-oriented, and goes the extra mile to make sure things are done right.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" className="profile-picture" />
                                        </div>
                                        <div className="subtitles">
                                            <h5>Belal K.</h5>
                                            <p>Group project-mate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <FormatQuoteRoundedIcon className="quote-icon" />
                                        <p>
                                            Christie's role as a child protection social worker requires advanced problem solving, communication, and organization - I have observed Christie excel in these skills and be unfraid to step up to a challenge.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" className="profile-picture" />
                                        </div>
                                        <div className="subtitles">
                                            <h5>Hailey P.</h5>
                                            <p>Acting Team Leader</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <FormatQuoteRoundedIcon className="quote-icon" />
                                        <p>
                                            Christie showed initiative and leadership when developing organizational systems and workflows to help improve office efficiency.  She embraces teamwork and is supportive and respectful towards others even when faced with conflict, while maintaining clear communication.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" className="profile-picture" />
                                        </div>
                                        <div className="subtitles">
                                            <h5>Kiley M.</h5>
                                            <p>Acting Team Leader</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testimonial-item">
                                    <div className="testimonial-comment">
                                        <FormatQuoteRoundedIcon className="quote-icon" />
                                        <p>
                                            Christie is the first person I want to have with me in a group project. She is hardworking, resilient and full of positive energy. One of her strengths is that she never shies away from a challenge.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <div className="picture-container">
                                            <img src="https://dummyimage.com/100x100/000/fff" alt="placeholder" className="profile-picture" />
                                        </div>
                                        <div className="subtitles">
                                            <h5>Sepehr Z.</h5>
                                            <p>Group project-mate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className="footer-container">
                    <img src={Footer} alt="footer image" />
                </div>
            </div>
        </div>
    )
}