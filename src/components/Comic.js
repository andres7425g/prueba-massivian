import React from 'react';

class Comic extends React.Component {
    render() {
        const comicData = this.props.comicData;
        return (
            comicData !== undefined ? (
            <article className="comic">
                <h2>{comicData.safe_title}</h2>
                <h3>Comic #{comicData.num}</h3>
                <img src={comicData.img} alt={`XKCD #${comicData.num}`}/>
                <p>{comicData.alt}</p>
            </article>
        ) : <h1>Loading...</h1>
        )
        
    }
}

export default Comic;