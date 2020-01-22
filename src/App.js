import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getmovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts.lt/api/v2/list_movies.json");
    this.setState({movies, isLoading:false});
    // == this.setState({movies:movies, isLoading:false});
  }
  componentDidMount() {
    this.getmovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(mov => (
              <Movie
                key={mov.id}
                id={mov.id}
                year={mov.year}
                title={mov.title}
                summary={mov.summary}
                poster={mov.medium_cover_image}
                genres={mov.genres}
              />
            ))}
          </div>
        )}
      </section>
    ); 
  }
}
export default App;
