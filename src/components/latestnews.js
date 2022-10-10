import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const LiveNews = () => {
    const [news, setNews] = useState([]);

    const loadArticle = (articleID) => {
        fetch(
            'https://community-hacker-news-v1.p.rapidapi.com/item/' +
                articleID +
                '.json?print=pretty',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host':
                        'community-hacker-news-v1.p.rapidapi.com',
                    'x-rapidapi-key':
                        'pOKUOxI3ExmshPcZFodnG3oD7SPjp1rBKl5jsnjQKv5my0vwDb',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setNews([...news, data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadnews = () => {
        fetch(
            'https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host':
                        'community-hacker-news-v1.p.rapidapi.com',
                    'x-rapidapi-key':
                        'pOKUOxI3ExmshPcZFodnG3oD7SPjp1rBKl5jsnjQKv5my0vwDb',
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                for (let index = 0; index < 10; index++) {
                    loadArticle(data[index]);
                    debugger;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // this will only render once
    useEffect(() => {
        loadnews();
    }, []);

    return (
        <div className="container-fluid text-center bg-grey">
            <h2>Live News</h2>
            <div className="row text-center">
                {news.map((element) => (
                    <div className="col-sm-4 p-2" key={element.id}>
                        <div className="card w-75">
                            <a href={element.url}>
                                <img
                                    src={element.img}
                                    className="card-img-top"
                                    alt="..."
                                />
                            </a>

                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href={element.url}>{element.title}</a>
                                </h5>
                                <p className="card-text">{element.des}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveNews;
