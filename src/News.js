import React from "react";
import './News.css'
export default function News(){
    let news = JSON.parse(localStorage.getItem('news'))
    let loc = window.location.href.split('/')[4]
    console.log(loc - 1, news)
    let curren_new = news[loc - 1]
    console.log(curren_new)
    return(
        <div>
            <div className="news-content">
                <div className="news-detail">
                    <div className="date">
                        <div>{news[loc - 1].created_at}</div>
                    </div>
                    <div className="news-title">
                        <h1>{news[loc - 1].title}</h1>
                    </div>
                    <div className="news-img">
                        <img src={require("./static/media/" + news[loc - 1].photo)} alt=""/>
                    </div>
                    <div className="news-text">
                        <p>{news[loc - 1].Text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
