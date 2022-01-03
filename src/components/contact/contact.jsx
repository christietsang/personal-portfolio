import "./contact.scss";
import lightsaberloading from '../../../src/assets/lightsaberloading.gif';
import backgroundimage from '../../../src/assets/contact-bg-image.jpg';
import ScreenHeading from '../../utilities/headings/ScreenHeading'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (i) => {
        setName(i.target.value);
    };

    const handleEmail = (i) => {
        setEmail(i.target.value);
    };

    const handleMessage = (i) => {
        setMessage(i.target.value);
    };

    console.log(name)
    console.log(email)
    console.log(message)

    return (
        <div className="contact" id="contact">
            <div className='title'>
                <ScreenHeading title={"Contact Me"} subHeading={"Let's Get in Touch!"} />
            </div>
            <div className="main-form">
                <div className="col">
                    <div className="profile-icon-overhead">
                        <div className="profile-icons">
                            <a href="https://www.linkedin.com/in/christietsang/">

                                <LinkedInIcon className="icon" />
                            </a>
                            <a href="https://github.com/christietsang">
                                <GitHubIcon className="icon" />
                            </a>
                            <a href="mailto:ctsang74@my.bcit.ca">
                                <EmailIcon className="icon" />
                            </a>
                        </div>
                        <div className="back-form">
                            <div className="img-back">
                                <img src={backgroundimage} alt="loading image" />
                            </div>
                        </div>
                        <form>
                            {/* <p></p> */}
                            <label htmlFor="name">Name</label>
                            <input type='text'
                                onChange={handleName}
                                value={name}
                            />

                            <label htmlFor="name">Email</label>
                            <input type='text'
                                onChange={handleEmail}
                                value={email}
                            />

                            <label htmlFor="name">Message</label>
                            <textarea type='text'
                                onChange={handleMessage}
                                value={message}
                            />

                            <div className='submit'>
                                <button type='submit'>
                                    Send <SendTwoToneIcon className="icon" />
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
