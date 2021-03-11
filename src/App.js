// import the MovieCard component
import MovieCard from './MovieCard';

// create a functional component that uses the MovieCard component
function App() {
  return (
    // ----------
    <>    
      <MovieCard
        posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
        title="Batman vs Superman"
        type="Movie"
      />
      <MovieCard
        posterUrl="https://images-na.ssl-images-amazon.com/images/I/419BKTGqRtL._AC_.jpg"
        title="Batman Begins"
        type="Movie"
      />
      <MovieCard
        posterUrl="https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg"
        title="Batman Returns"
        type="Movie"
      />
    </>
  );
  // ----------
}

export default App;
