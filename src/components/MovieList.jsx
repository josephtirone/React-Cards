import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.movies = movies;
  }

  render() {
    return (
      <div className="movie-list">
        {
          this.movies.map((component, index) => (
            <MovieCard movie={ component } key={ `Movie Title ${index + 1}` } />
          ))
        }
      </div>

    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
