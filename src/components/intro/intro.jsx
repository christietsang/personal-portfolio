import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typical from 'react-typical';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/christietsang/">
                                <LinkedInIcon className="icon" />
                            </a>
                        </div>
                        <a href="https://github.com/christietsang">
                            <div className="itemContainer">
                                <GitHubIcon className="icon" />
                            </div>
                        </a>
                        <div className="itemContainer">
                            <a href="mailto:ctsang74@my.bcit.ca">
                                <EmailIcon className="icon" />
                            </a>
                        </div>
                        <div className="itemContainer">
                            <a href="#portfolio">
                                <KeyboardArrowDownIcon className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Christie</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev",
                                    2000,
                                    "Full Stack Developer",
                                    2000,
                                    "Motivated Student",
                                    2000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                A self-motivated and inquisitive computer science student who 
                                enjoys the process of problem-solving.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="profile-button">
                            {""}Hire Me{" "}
                        </button>
                        <button className="profile-button">
                            {""}See Resume{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
