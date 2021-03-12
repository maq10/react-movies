import {truncate} from './utils';

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img alt="movie poster" src={props.posterUrl} />
            <p>{truncate(props.title, 15)}</p>
            <p>{props.type}</p>
        </div>
    )
}

export default MovieCard;