import React from 'react';
// import the MovieCard component
import MovieCard from './MovieCard';
// import the MovieDetails component
import MovieDetails from './MovieDetails';
// import the getMoviesByName cfunction
import { getMoviesByName } from './utils';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'batman',
      isLoading: false, 
      movies: null,
      error: null
    }
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });

    setTimeout( async () => {
      try {
        const movieData = await getMoviesByName(this.state.searchTerm)
        this.setState({
          isLoading: false,
          movies: movieData,
          error: null
        })
      } catch (error) {
        this.setState({
          isLoading: false,
          movies: [],
          error: error
        })
      }
    }, 5000);
    
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {

    return (
      // ----------
      <>
        { this.state.isLoading 
          ? <h1>Loading data</h1>
          : (
            <>
              {this.state.movies &&
                this.state.movies.Search.map((movie, index) => (<MovieCard key={movie.imdbID} title={movie.Title} posterUrl={movie.Poster} type={movie.Type} />)) 
              }
        
              <MovieDetails 
                posterUrl="https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg"
                title="Batman Returns"
                rated="PG-13"
                runtime={183}
                // genre="Sci-fi"
                rating={0}
                plot="Batman beats up a bunch of bad guys."
                actors={"Dani Devito, Henry Cavil"}
              />
            </>
          ) 
        }
      </>
      // ----------
    );
  }
  å
}

export default App;

// Comment out the old functional compoment
// // create a functional component that uses the MovieCard component
// function App() {
//   return (
//     // ----------
//     <>    
//       <MovieCard
//         posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
//         title="Batman vs Superman"
//         type="Movie"
//       />
//       <MovieCard
//         posterUrl="https://images-na.ssl-images-amazon.com/images/I/419BKTGqRtL._AC_.jpg"
//         title="Batman Begins"
//         type="Movie"
//       />
//       <MovieCard
//         posterUrl="https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg"
//         title="Batman Returns"
//         type="Movie"
//       />
//     </>
//   );
//   // ----------
// }

// export default App;