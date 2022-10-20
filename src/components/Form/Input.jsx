import PropTypes from "prop-types";

function Input({ label, type }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        className="rounded border-2"
        type={type}
        id={label.toLowerCase()}
        placeholder={label}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]),
};
Input.defaultProps = {
  type: "text",
};

export default Input;
