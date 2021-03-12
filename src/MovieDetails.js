// import PropTypes from 'prop-types';

const MovieDetails = ( { posterUrl, title, rated, runtime, genre = 'Unknown', rating = 0, plot, actors } ) => {
    return (
        <div className="movie-details">
            <div className="poster">
                <img alt="movie poster" src={posterUrl} />
            </div>
            <div>
                <div className="header">
                    <p className="title">{title}</p>
                    <p className="rating">{rating ?? 'N/A'}</p>
                </div>
                <ul>
                    <li>{runtime} min</li>
                    <li>{rated}</li>
                    <li>{genre}</li>
                </ul>
                <div className="info-section">
                    <p className="title">Plot</p>
                    <p>{plot}</p>
                </div>
                <div className="info-section">
                    <p className="title">Actors</p>
                    <p>{actors}</p>
                </div>
            </div>
        </div>
    );
}

// MovieDetails.propTypes = {
//     posterUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     rated: PropTypes.string.isRequired,
//     runtime: PropTypes.number.isRequired,
//     genre: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     plot: PropTypes.string.isRequired,
//     actors: PropTypes.string.isRequired,
// }

// MovieDetails.defaultProps = {
//     rating: 0,
//     genre: 'Unknown'
// }

export default MovieDetails;