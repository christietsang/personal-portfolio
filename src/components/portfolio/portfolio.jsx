import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
    const [selected, setSelected] = useState("web");

    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "game",
            title: "Games",
        },
        {
            id: "design",
            title: "Design",
        },  
    ];
    
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}      
                    />
                ))}
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
