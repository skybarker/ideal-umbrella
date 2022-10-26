import PropTypes from "prop-types";

export default function Header({ title }) {
  return <h1 className="my-4 text-center text-3xl font-semibold">{title}</h1>;
}

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: "Welcome",
};
