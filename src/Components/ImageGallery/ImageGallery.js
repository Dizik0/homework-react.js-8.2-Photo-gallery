import PropTypes from "prop-types";
import "../../App.css";
import { ImageGalleryItem } from "../ImageGalleryItem";

export const ImageGallery = ({ dataListCard, openModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem dataListCard={dataListCard} openModal={openModal} />
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  dataListCard: PropTypes.array.isRequired,
};
