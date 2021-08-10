import "./App.css";
import { Searchbar } from "./Components/Searchbar";
import { useState, useEffect } from "react";
import { ImageGallery } from "./Components/ImageGallery";
import { Button } from "./Components/Button";
import { Modal } from "./Components/Modal";
import { Loader } from "./Components/Loader";
import axios from "axios";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bigPicture, setBigPicture] = useState("");
  const [showModal, setShowModal] = useState(false);

  const API_KEY = "21345832-5dab6ae111cd5d8e046b71308";

  const getApiData = () => {
    if (searchQuery) {
      setLoading(true);
      axios
        .get(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(
          ({ data: { hits } }) => setTodo([...todo, ...hits]),
          setPage(page + 1)
        )
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => getApiData(), [searchQuery]);

  const getSearchQuery = (e) => {
    setSearchQuery(e);
    setPage(1);
    setTodo([]);
  };

  const resetAllData = () => {
    setSearchQuery("");
    setPage(1);
  };

  const openModal = (e) => {
    const { bigpicture } = e.currentTarget.dataset;
    setBigPicture(bigpicture);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });

  return (
    <div>
      <Searchbar getSearchQuery={getSearchQuery} />
      <ImageGallery dataListCard={todo} openModal={openModal} />
      {todo.length > 0 && (
        <Button getApiData={getApiData} resetAllData={resetAllData} />
      )}
      {loading && <Loader />}
      {showModal && <Modal img={bigPicture} onClose={toggleModal} />}
    </div>
  );
};

export default App;
