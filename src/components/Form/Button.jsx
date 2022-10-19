import PropTypes from "prop-types";

function Button({ type, txt }) {
  return (
    <button
      type={type ? "submit" : "button"}
      className="mt-4 rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700"
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
