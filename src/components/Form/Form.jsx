import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
// import Input from "./Input";

export default function Form({ fields, button }) {
  const [name, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 flex flex-col">
        <label htmlFor={fields.username.label}>{fields.username.label}</label>
        <input
          className="rounded border-2"
          type={fields.username.type}
          id={fields.username.label}
          placeholder={fields.username.label}
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor={fields.email.label}>{fields.email.label}</label>
        <input
          className="rounded border-2"
          type={fields.email.type}
          id={fields.email.label}
          placeholder={fields.email.label}
          value={name}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button txt={button.txt} type={button.type} />
    </form>
  );
}
//

// fields.foreach((item) => <Input label={item.label} type={item.type} />)
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
