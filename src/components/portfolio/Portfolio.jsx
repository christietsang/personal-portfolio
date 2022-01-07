import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webAppPortfolio, gameAppPortfolio, designPortfolio } from "./data";
import ScreenHeading from "../../utilities/headings/ScreenHeading"
import Header from "../../assets/blue-swoop.png";


export default function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
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

    useEffect(() => {
        switch (selected) {
            case "web":
                setData(webAppPortfolio);
                break;
            case "game":
                setData(gameAppPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(webAppPortfolio);
        }

    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <div className="header-container">
                <img src={Header} alt="header image" />
            </div>
            <ScreenHeading title={"My Portfolio"} subHeading={"Personal & School Projects"}/>
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
                {data.map((datas) => (
                    <div className="item">
                        <a href={datas.link}>
                            <img
                                src={datas.img}
                                alt=""
                            />
                        </a>
                        <h3>{datas.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
