import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";

export default function Form({ fields, button }) {
  return (
    <form>
      {fields.map((field) => (
        <Input key={field.label} label={field.label} type={field.type} />
      ))}
      <Button txt={button.txt} type={button.type} />
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ).isRequired,
  button: PropTypes.shape({
    txt: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button"]),
  }).isRequired,
};
