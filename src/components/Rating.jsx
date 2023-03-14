import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    const { rating } = this.props;
    this.rating = rating;
  }

  render() {
    return (

      <div className="movie-card-rating">
        <div className="rating">
          { this.rating }
        </div>
      </div>

    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
