// import the utility functions found in this JavaScript file utils.js
import {truncate} from './utils';

// create a component called MovieCard
const MovieCard = (props) => {
    return (
        // ----------
        <div className="movie-card">
            <img src={props.posterUrl} />
            <p>{truncate(props.title, 15)}</p>
            <p>{props.type}</p>
        </div>
        // ----------
    )
}
// export the MovieCard component
export default MovieCard;