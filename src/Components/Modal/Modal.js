import "../../App.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ img, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const BackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={BackdropClick}>
      <img className="Modal" src={img} alt="thematic-Photography" />
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
