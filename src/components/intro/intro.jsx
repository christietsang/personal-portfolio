import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {
    return (
        <div className="intro" id="intro">
                <div className="itemContainer">
                    <a href="#portfolio">
                        <KeyboardArrowDownIcon className="icon"/>
                    </a>
                </div>
        </div>
    )
}
