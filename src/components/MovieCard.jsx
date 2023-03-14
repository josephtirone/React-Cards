import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.movie = props.movie;
  }

  render() {
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          {this.movie.name}
          <img src={ this.movie.imagePath } alt="" className="movie-card-image" />
          <h4 className="movie-card-title">{this.movie.title}</h4>
          <h5 className="movie-card-subtitle">{this.movie.subtitle}</h5>
          <p className="movie-card-storyline">{this.movie.storyline}</p>
          <Rating rating={ this.movie.rating } />
        </div>

      </div>

    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
