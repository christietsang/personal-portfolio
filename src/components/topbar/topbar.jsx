import './topbar.scss'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="title">my<span class="title-color">Portfolio.</span></a>
                    {/* <div className="itemContainer">
                        <LinkedInIcon className="icon"/>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                    </div> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
