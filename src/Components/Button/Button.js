import PropTypes from "prop-types";
import "../../App.css";

export const Button = ({ getApiData }) => {
  return (
    <button type="Submit" className="Button" onClick={getApiData}>
      Load more
    </button>
  );
};

Button.propTypes = {
  getApiData: PropTypes.func.isRequired,
};
