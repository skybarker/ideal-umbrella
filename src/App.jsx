import Header from "components/Header";
import Form from "components/Form/Form";
import "./App.css";

function App() {
  const props = {
    title: "Login Form",
    button: {
      txt: "Login",
      type: "submit",
    },
    label: "Email",
    fields: ["Email", "Password"],
  };

  return (
    <>
      {Header(props)}
      {Form(props)}
    </>
  );
}

export default App;
