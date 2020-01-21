import React from 'react';
import axios from "axios";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getmovies = async () => {
    const movies = await axios.get("https://yts.lt/api/v2/list_movies.json");
  }
  componentDidMount() {
    this.getmovies();
  }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We ary ready"}</div>
  }
}
export default App;
