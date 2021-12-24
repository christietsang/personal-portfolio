import './topbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="title">my<span class="title-color">Portfolio.</span></a>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon"/>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
