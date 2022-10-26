import PropTypes from "prop-types";
import Form from "components/Form/Form";
import "./App.css";

function App() {
  const props = {
    title: "Login Form",
    button: {
      txt: "Login",
      type: "submit",
    },
    fields: [
      { label: "email", type: "email" },
      { label: "password", type: "password" },
    ],
  };

  App.propTypes = {
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

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-semibold">Login Demo</h1>
      <Form fields={props.fields} button={props.button} />
    </>
  );
}

export default App;
