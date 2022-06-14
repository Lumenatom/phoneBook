import React from "react";
import HomeImg from "../../img/Home-img.png"
import style from "./Home.module.css"


const Home = () => {
    return (
        <div className={style.mainBlock}>
            <div>
                <img src={HomeImg} alt="phoneBook" />
            </div>
            <div>
                <h2>Phone book</h2>
            </div>

        </div>

    )
}

export default Home;