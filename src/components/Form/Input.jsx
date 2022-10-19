import PropTypes from "prop-types";

function Input({ label }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        className="rounded border-2"
        type={label.toLowerCase()}
        id={label.toLowerCase()}
        placeholder={label}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
