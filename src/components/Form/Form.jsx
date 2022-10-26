import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";

export default function Form({ fields, button }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const elements = form.getElementsByTagName("input");
    console.log(elements.email.value);
    console.log(elements.password.value);
  }

  return (
    <form onSubmit={handleSubmit}>
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
