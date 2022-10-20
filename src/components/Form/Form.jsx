import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";

function Form({ fields, button }) {
  return (
    <form className="mx-auto mt-2 max-w-xs">
      {fields.map((input) => <Input label= {input} />)}
      <Button (button) />
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Form;
