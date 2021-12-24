import './topbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="title">my<span class="title-color">Portfolio.</span></a>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon"/>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
