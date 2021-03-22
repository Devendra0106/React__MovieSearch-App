import React from 'react';
const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}


const Movie = (props) => (
    <div className="movie">
        <img src={props.poster_path ? IMAGES_API + props.poster_path : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} alt={props.title} />
        <div className="movie-info">
            <h3>{props.title}</h3>
            <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{props.overview}</p>
        </div>
    </div>
);

export default Movie;