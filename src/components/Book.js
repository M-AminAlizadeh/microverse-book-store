/* eslint-disable */
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-container">
    <span className="book-title">{title}</span>
    <span className="book-author">{author}</span>
    <button type="submit">Remove</button>
  </div>
);

Book.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default Book;
