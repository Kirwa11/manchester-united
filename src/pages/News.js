import React from "react";
import {news} from "../data/news";


const News = () => {
    return(
        <div className="news-page">
            <h1>Latest News</h1>
            <div className="news-list">
                {news.map(article => (
                    <div key={article.id} className="news-item">
                        <h2>{article.title}</h2>
                        <div className="news-date">{article.data}</div>
                        <p className="news-summary">{article.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default News;