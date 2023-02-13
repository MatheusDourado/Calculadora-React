import PropTypes from "prop-types"

export const Button = ({ value, onClick, style, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {value}
    </button>
  );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
}