import PropTypes from 'prop-types';

export default PropTypes.shape({
  go: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  step: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
});
