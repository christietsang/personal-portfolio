import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Web App</li>
                <li>Games</li>
                <li>Design</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://dummyimage.com/200x200/000000/fff" alt=""/>
                    <h3>PandemicTravel</h3>
                </div>
                <div className="item">
                    <img src="https://dummyimage.com/200x200/000000/fff" alt=""/>
                    <h3>DeskBuddy</h3>
                </div>
            </div>
        </div>
    )
}
